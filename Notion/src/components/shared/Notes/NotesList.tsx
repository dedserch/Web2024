import React, { useEffect, useState } from "react"
import { NoteService } from "../../../services/NoteService"
import { INote } from "../../../types/note.types"
import { NoteCard } from "./NoteCard"

export const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await NoteService.getAll()
        const userNotes = fetchedNotes.filter(
          (note) => note.authorId === localStorage.getItem("userId")
        )
        const sortedNotes = userNotes.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        setNotes(sortedNotes)
      } catch (error) {
        console.error("Error fetching notes:", error)
      }
    }

    fetchNotes()
  }, [])

  const handleDeleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 py-8">
      <div className="w-full bg-white p-8 rounded-lg shadow-xl">
        <div className="space-y-4">
          {notes.length > 0 ? (
            notes.map((note) => (
              <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
            ))
          ) : (
            <p className="text-center text-gray-500">No notes available</p>
          )}
        </div>
      </div>
    </div>
  )
}
