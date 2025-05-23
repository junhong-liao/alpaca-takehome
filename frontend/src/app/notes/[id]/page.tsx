"use client";
import useSWR from "swr";
import { useState } from "react";
import { useParams } from "next/navigation";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function NoteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: note, mutate, isLoading } = useSWR(id ? `/api/notes/${id}` : null, fetcher);
  const [regenLoading, setRegenLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  async function handleRegenerate() {
    setRegenLoading(true);
    await fetch(`/api/notes/${id}`, { method: "PATCH" });
    await mutate();
    setRegenLoading(false);
  }

  function handleCopy() {
    if (note?.generatedNote) {
      navigator.clipboard.writeText(note.generatedNote);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    }
  }

  if (isLoading) return <div className="p-8">Loading...</div>;
  if (!note) return <div className="p-8 text-red-500">Note not found.</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl mb-4 font-bold">Session Note</h1>
      <div className="mb-2 text-gray-600 text-xs">Created: {new Date(note.createdAt).toLocaleString()}</div>
      <textarea
        className="w-full border rounded p-2 min-h-[120px] mb-2"
        value={note.generatedNote || ""}
        readOnly
      />
      <div className="flex gap-2">
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
        <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap">{note.rawText}</pre>
      </div>
    </div>
  );
} 