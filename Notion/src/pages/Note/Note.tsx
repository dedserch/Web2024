import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { INote } from "../../types/note.types"
import { NoteService } from "../../services/NoteService"
import { Button } from "../../components/ui/Button"

export const Note: React.FC = () => {
  const { noteId } = useParams<{ noteId: string }>()
  const [note, setNote] = useState<INote | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchNote = async () => {
      if (!noteId) return
      try {
        const fetchedNote = await NoteService.findById(noteId)
        if (fetchedNote) {
          setNote(fetchedNote)
        } else {
          navigate("/notes")
        }
      } catch (error) {
        console.error("Error fetching note:", error)
        navigate("/notes")
      }
    }

    fetchNote()
  }, [noteId, navigate])

  const handleDelete = async () => {
    if (!note) return
    try {
      await NoteService.delete(note.id)
      navigate("/notes")
    } catch (error) {
      console.error("Error deleting note:", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 py-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Button
            name="← Back"
            onClick={() => navigate("/notes")}
          />
        </div>
        {note ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">{note.title}</h1>
              <div className="flex space-x-2">
                <Button
                  name="✍️ Edit"
                  onClick={() => navigate(`/notes/edit/${note.id}`)}
                />
                <Button name="🗑️ Delete" onClick={handleDelete} />
              </div>
            </div>
            <pre className="whitespace-pre-wrap break-words text-gray-700 text-lg">
              {note.body}
            </pre>
          </>
        ) : (
          <p>Loading note...</p>
        )}
      </div>
    </div>
  )
}
