"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { NoteInput } from "../../lib/schemas";

export default function NewNotePage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NoteInput>();
  const router = useRouter();

  async function onSubmit(data: NoteInput) {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const note = await res.json();
      router.push(`/notes/${note.id}`);
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl mb-4 font-bold">New Session Note</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <textarea
          className="w-full border rounded p-2 min-h-[120px]"
          placeholder="Enter session bullet points..."
          {...register("rawText", { required: true })}
        />
        {errors.rawText && <div className="text-red-500">This field is required.</div>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Generate Note"}
        </button>
      </form>
    </div>
  );
} 