"use client";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useRef, useEffect } from "react";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function NotesPage() {
  const { data: notes, mutate, isLoading: notesLoading } = useSWR("/api/notes", fetcher);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [newRawText, setNewRawText] = useState("");
  const [newLoading, setNewLoading] = useState(false);
  const [regenLoading, setRegenLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [noteTitle, setNoteTitle] = useState("Session Note");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);
  // Default prompt template for note generation
  const DEFAULT_PROMPT = `You're a clinical scribe specializing in ABA therapy. Please convert the following bullet points into a professional clinical session note using the template below. Use Markdown formatting with bolded headers and section titles, and bullet lists where indicated.

# **Session Note**
**Client:** [Client Name]
**Date:** [Session Date]
**Location:** [Location]

## **Presenting Information**
- 

## **Goals and Objectives**
- 

## **Interventions Implemented**
- 

## **Progress Towards Goals**
- 

## **Recommendations**
- 

Provide clear, concise, and professional language. Fill in each section appropriately based on the bullet points provided.
`;
  const [promptTemplate, setPromptTemplate] = useState<string>(DEFAULT_PROMPT);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  // State and ref for editing the generated note content
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [editedNoteText, setEditedNoteText] = useState("");
  const noteTextareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedNote = notes?.find((n: any) => n.id === selectedId) || (creating ? null : notes?.[0]);

  async function handleRegenerate() {
    if (!selectedNote) return;
    setRegenLoading(true);
    console.log('handleRegenerate: regenerating note id:', selectedNote.id);
    try {
      const response = await fetch(`/api/notes/${selectedNote.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptTemplate }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to regenerate note:", {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });
        throw new Error(`Regeneration failed: ${response.status} ${response.statusText}`);
      }
      await mutate();
    } catch (error) {
      console.error("Error regenerating note:", error);
      // You could add UI feedback here if needed
    } finally {
      setRegenLoading(false);
    }
  }

  function handleCopy() {
    if (selectedNote?.generatedNote) {
      navigator.clipboard.writeText(selectedNote.generatedNote);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    }
  }

  function handleTemplateClick() {
    setShowTemplate(true);
  }

  async function handleNewNote() {
    setCreating(true);
    setSelectedId(null);
    setNewRawText("");
    setNoteTitle("Session Note");
    setTimeout(() => textareaRef.current?.focus(), 100);
  }

  async function handleNewNoteSubmit() {
    if (!newRawText.trim()) return;
    setNewLoading(true);
    console.log('handleNewNoteSubmit: submitting rawText:', newRawText);
    
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawText: newRawText, title: noteTitle, prompt: promptTemplate }),
      });
      
      if (res.ok) {
        const note = await res.json();
        setCreating(false);
        setNewRawText("");
        await mutate();
        setSelectedId(note.id);
      } else {
        let errorMessage = "Unknown error";
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || "API Error";
          console.error("API returned error:", {
            status: res.status,
            statusText: res.statusText,
            details: errorData
          });
        } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
        }
        
        // Even if API fails, still add a local note to sidebar
        const tempNote = {
          id: "temp-" + Date.now(),
          rawText: newRawText,
          generatedNote: `Note generation failed: ${errorMessage}`,
          createdAt: new Date().toISOString()
        };
        
        // Add the temporary note to the list
        if (notes) {
          mutate([tempNote, ...notes], false);
        } else {
          mutate([tempNote], false);
        }
        
        setCreating(false);
        setNewRawText("");
        setSelectedId(tempNote.id);
      }
    } catch (error) {
      console.error("Error submitting note:", error);
      // Log more details about the error
      if (error instanceof Error) {
        console.error({
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
      
      // Same fallback as above
      const tempNote = {
        id: "temp-" + Date.now(),
        rawText: newRawText,
        generatedNote: `Note generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        createdAt: new Date().toISOString()
      };
      
      if (notes) {
        mutate([tempNote, ...notes], false);
      } else {
        mutate([tempNote], false);
      }
      
      setCreating(false);
      setNewRawText("");
      setSelectedId(tempNote.id);
    }
    
    setNewLoading(false);
  }

  function handleNewNoteKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      handleNewNoteSubmit();
    }
  }

  function handleTitleClick() {
    setIsEditingTitle(true);
    setTimeout(() => titleRef.current?.focus(), 10);
  }

  function handleTitleBlur() {
    setIsEditingTitle(false);
    if (selectedNote) {
      fetch(`/api/notes/${selectedNote.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: noteTitle }),
      }).then(res => {
        if (res.ok) mutate();
        else console.error('Failed to save title');
      }).catch(err => console.error('Error saving title:', err));
    }
  }

  function handleTitleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      titleRef.current?.blur();
    }
  }

  // Handlers for inline editing of generated note
  function handleNoteClick() {
    setIsEditingNote(true);
    setTimeout(() => noteTextareaRef.current?.focus(), 10);
  }
  async function handleNoteBlur() {
    setIsEditingNote(false);
    if (selectedNote) {
      try {
        const res = await fetch(`/api/notes/${selectedNote.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ generatedNote: editedNoteText }),
        });
        if (res.ok) mutate();
        else console.error('Failed to save edited note');
      } catch (err) {
        console.error('Error saving edited note:', err);
      }
    }
  }
  function handleNoteKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      noteTextareaRef.current?.blur();
    }
  }

  useEffect(() => {
    if (creating) {
      textareaRef.current?.focus();
    }
  }, [creating]);

  // Initialize edited note text when a note is selected
  useEffect(() => {
    if (selectedNote) {
      setEditedNoteText(selectedNote.generatedNote || "");
      setIsEditingNote(false);
    }
  }, [selectedNote]);

  // Set title when a note is selected
  useEffect(() => {
    if (selectedNote && !creating) {
      setNoteTitle(selectedNote.title || "Session Note");
      setIsEditingTitle(false);
    }
  }, [selectedNote, creating]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r flex flex-col">
        <div className="p-4 pb-2 font-bold text-2xl text-gray-800" style={{color:'#222C3A'}}>Session Notes</div>
        <div className="mx-4 mb-4 flex space-x-2">
          <button
            className="flex-1 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 font-semibold"
            onClick={handleNewNote}
          >
            + New Note
          </button>
          <button
            className="flex-1 bg-gray-600 text-white text-center py-2 rounded hover:bg-gray-700 font-semibold"
            onClick={handleTemplateClick}
          >
            Template
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {notesLoading ? (
            <div className="p-4 text-gray-400">Loading...</div>
          ) : notes?.length === 0 ? (
            null
          ) : (
            <ul>
              {notes?.map((note: any) => (
                <li
                  key={note.id}
                  className={`cursor-pointer px-4 py-3 border-b hover:bg-blue-50 ${selectedNote?.id === note.id && !creating ? "bg-blue-100 font-semibold" : ""}`}
                  onClick={() => { setSelectedId(note.id); setCreating(false); }}
                >
                  <div className="font-semibold truncate text-sm text-gray-800">{note.title}</div>
                  <div className="truncate text-xs text-gray-600 mt-1">{note.generatedNote?.slice(0, 40) || note.rawText.slice(0, 40)}</div>
                  <div className="text-xs text-gray-400">{new Date(note.createdAt).toLocaleDateString()}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-4">
        {creating ? (
          <div className="w-full max-w-4xl">
            <div className="relative w-full bg-white rounded-md shadow-md min-h-[400px]">
              <div className="absolute top-4 left-4">
                {isEditingTitle ? (
                  <input
                    ref={titleRef}
                    type="text"
                    className="text-3xl font-bold mb-1 px-2 py-1 w-64 border border-gray-300 rounded outline-none"
                    style={{color:'#222C3A'}}
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    onBlur={handleTitleBlur}
                    onKeyDown={handleTitleKeyDown}
                    autoFocus
                  />
                ) : (
                  <div className="flex items-center cursor-pointer" onClick={handleTitleClick}>
                    <h1 className="text-3xl font-bold px-2 py-1 hover:bg-gray-100 rounded" style={{color:'#222C3A'}}>
                      {noteTitle}
                    </h1>
                    <span className="ml-2 text-gray-500">✏️</span>
                  </div>
                )}
              </div>
              <div className="absolute top-16 left-4 text-gray-600 text-xs">
                Created: {new Date().toLocaleString()}
              </div>
              <textarea
                ref={textareaRef}
                className="w-full pt-20 px-4 pb-4 h-[400px] rounded-md outline-none text-black bg-white"
                value={newRawText}
                onChange={e => setNewRawText(e.target.value)}
                onKeyDown={handleNewNoteKeyDown}
                placeholder="CMD ⌘ + Enter to transform your clinical notes."
                disabled={newLoading}
              />
            </div>
          </div>
        ) : !selectedNote ? (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            No notes yet. Create your first note!
          </div>
        ) : (
          <div className="w-full max-w-4xl bg-white rounded shadow p-8">
            <div 
              className="relative"
              onClick={handleTitleClick}
            >
              {isEditingTitle ? (
                <input
                  ref={titleRef}
                  type="text"
                  className="text-3xl font-bold mb-4 px-2 py-1 w-full border border-gray-300 rounded outline-none"
                  style={{color:'#222C3A'}}
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  onBlur={handleTitleBlur}
                  onKeyDown={handleTitleKeyDown}
                  autoFocus
                />
              ) : (
                <h1 
                  className="text-3xl font-bold mb-4 cursor-text px-2 py-1 hover:bg-gray-100 rounded flex items-center"
                  style={{color:'#222C3A'}}
                >
                  {noteTitle}
                  <span className="ml-2 text-gray-500">✏️</span>
                </h1>
              )}
            </div>
            <div className="mb-2 text-gray-600 text-xs">Created: {new Date(selectedNote.createdAt).toLocaleString()}</div>
            {/* Generated note content: editable on click */}
            {isEditingNote ? (
              <textarea
                ref={noteTextareaRef}
                className="w-full border rounded p-2 min-h-[120px] mb-2 bg-white text-black"
                value={editedNoteText}
                onChange={(e) => setEditedNoteText(e.target.value)}
                onBlur={handleNoteBlur}
                onKeyDown={handleNoteKeyDown}
              />
            ) : (
              <div
                className="w-full border rounded p-2 min-h-[120px] mb-2 bg-gray-100 text-black cursor-text"
                onClick={handleNoteClick}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedNote.generatedNote || ""}
                </ReactMarkdown>
              </div>
            )}
            <div className="flex gap-2 mb-4">
              <button
                onClick={handleRegenerate}
                className="bg-yellow-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={regenLoading}
              >
                {regenLoading ? "Regenerating..." : "Regenerate"}
              </button>
              <button
                onClick={handleCopy}
                className="bg-gray-700 text-white px-4 py-2 rounded"
              >
                {copySuccess ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>
            <div className="mt-4">
              <div className="text-xs text-gray-400">Original Input:</div>
              <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap text-black">{selectedNote.rawText}</pre>
            </div>
          </div>
        )}
      </main>
      {showTemplate && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl mx-4">
            <h2 className="text-xl font-bold mb-2 text-black">Template Prompt</h2>
            <textarea
              className="w-full bg-gray-100 p-4 rounded text-sm text-black"
              rows={6}
              value={promptTemplate}
              onChange={(e) => setPromptTemplate(e.target.value)}
            />
            <div className="mt-4 text-right">
              <button onClick={() => setShowTemplate(false)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 