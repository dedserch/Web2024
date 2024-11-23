import React from "react"
import { NoteCard } from "./NoteCard"
import { INote } from "../../../types/note.types"

interface NotesListProps {
  notes: INote[]
  onDelete: (id: string) => void
}

export const NotesList: React.FC<NotesListProps> = ({ notes, onDelete }) => {
  return (
    <div className="flex flex-col gap-5">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  )
}
