import React from "react"
import { INote } from "../../../types/note.types"
import { useNavigate } from "react-router-dom"
import { NoteService } from "../../../services/NoteService"
import { Button } from "../../ui/Button"

interface NoteCardProps {
  note: INote
  onDelete: (id: string) => void
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/notes/edit/${note.id}`)
  }

  const handleDelete = async () => {
    try {
      await NoteService.delete(note.id)
      onDelete(note.id)
    } catch (error) {
      console.error("Error deleting note:", error)
    }
  }

  const formattedDate = new Date(note.createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center cursor-pointer">
      <div>
        <h3 className="text-xl font-bold">{note.title}</h3>
        <p className="text-gray-500">{formattedDate}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button name="✍️ Edit" onClick={handleEdit} />
        <Button name="🗑️ Delete" onClick={handleDelete} />
      </div>
    </div>
  )
}