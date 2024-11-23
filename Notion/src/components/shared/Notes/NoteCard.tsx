import React from "react"
import { INote } from "../../../types/note.types"
import { useNavigate } from "react-router-dom"
import { NoteService } from "../../../services/NoteService"
import { Button } from "../../ui/Button"
import { formatDate } from "../../../helpers/formatDate"


interface NoteCardProps {
  note: INote
  onDelete: (id: string) => void
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  const navigate = useNavigate()

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation()
    navigate(`/notes/edit/${note.id}`)
  }

  const handleDelete = async (event: React.MouseEvent) => {
    event.stopPropagation()
    try {
      await NoteService.delete(note.id)
      onDelete(note.id)
    } catch (error) {
      console.error("Error deleting note:", error)
    }
  }

  const handleNavigateToNote = () => {
    navigate(`/notes/${note.id}`)
  }

  const formattedDate = formatDate(note.createdAt)

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
      onClick={handleNavigateToNote}
    >
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
