import React from "react"
import { useParams } from "react-router-dom"
import { NoteForm } from "../../components/shared/NoteForm/NoteForm"


export const NoteEdit: React.FC = () => {
  const { noteId } = useParams<{ noteId: string }>()

  return (
    <div>
      {noteId ? <NoteForm isEdit={true} noteId={noteId} /> : <p>Note not found</p>}
    </div>
  )
}
