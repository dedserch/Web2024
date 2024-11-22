import React from "react"
import { Link } from "react-router-dom"
import { NotesList } from "../../components/shared/Notes/NotesList"
import { Button } from "../../components/ui/Button"

export const Notes: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <div className="w-full bg-white p-8 rounded-lg shadow-xl">
        <div className="flex justify-center mb-6">
          <Link to="/notes/create">
            <Button name="Create New Note" />
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-center mb-6">Your Notes</h2>
        <NotesList />
      </div>
    </div>
  )
}
