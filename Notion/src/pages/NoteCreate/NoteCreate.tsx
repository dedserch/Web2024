import React from "react"
import { NoteForm } from "../../components/shared/NoteForm/NoteForm"


export const NoteCreate: React.FC = () => {
  return (
    <div>
      <NoteForm isEdit={false} />
    </div>
  )
}
