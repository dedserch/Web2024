import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NotesList } from "../../components/shared/Notes/NotesList"
import { Button } from "../../components/ui/Button"
import { INote } from "../../types/note.types"
import { NoteService } from "../../services/NoteService"

export const Notes: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await NoteService.getAll()
        setNotes(fetchedNotes)
      } catch (error) {
        console.error("Error fetching notes:", error)
      }
    }

    fetchNotes()
  }, [])

  const handleDelete = (id: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 py-8">
      <div className="w-full bg-white p-8 rounded-lg shadow-xl">
        <div className="flex justify-center mb-6">
          <Link to="/notes/create">
            <Button name="Create New Note" />
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-center mb-6">Your Notes</h2>
        <NotesList notes={notes} onDelete={handleDelete} />
      </div>
    </div>
  )
}
