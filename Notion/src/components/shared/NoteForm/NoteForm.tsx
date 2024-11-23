import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NoteService } from "../../../services/NoteService"
import { NoteToCreate, NoteToUpdate } from "../../../types/note.types"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { TextArea } from "../../ui/TextArea"
import { ValidationService } from "../../../services/ValidationService"

interface NoteFormProps {
  isEdit: boolean
  noteId?: string
}

export const NoteForm: React.FC<NoteFormProps> = ({ isEdit, noteId }) => {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [errors, setErrors] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (isEdit && noteId) {
      const fetchNote = async () => {
        try {
          const note = await NoteService.findById(noteId)
          if (note) {
            setTitle(note.title)
            setDescription(note.body)
          }
        } catch (error) {
          console.error("Error fetching note:", error)
        }
      }
      fetchNote()
    }
  }, [isEdit, noteId])

  const validateForm = () => {
    const newErrors = { title: "", description: "" }
    let isValid = true

    if (!ValidationService.validateTitle(title)) {
      newErrors.title = "Title is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const noteData: NoteToCreate | NoteToUpdate = {
      title,
      body: description,
      authorId: localStorage.getItem("userId") || "",
    }

    try {
      if (isEdit && noteId) {
        await NoteService.update(noteId, noteData as NoteToUpdate)
        navigate(`/notes`)
      } else {
        const newNote = await NoteService.create(noteData as NoteToCreate)
        navigate(`/notes`)
      }
    } catch (error) {
      console.error("Error saving note:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center flex-col bg-gray-100 py-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-xl">
        <div className="mb-6 flex justify-start">
          <Button name="Back to Notes" onClick={() => navigate("/notes")} />
        </div>
        <h2 className="text-3xl font-bold text-center mb-6">{isEdit ? "Edit Note" : "Create Note"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <Input
              name="title"
              type="text"
              value={title}
              placeholder="Enter the title of your note"
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description (Optional)</label>
            <TextArea
              name="description"
              value={description}
              placeholder="Enter the body of your note"
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          <div className="flex justify-center mt-6">
            <Button name={isEdit ? "Edit" : "Create"} />
          </div>
        </form>
      </div>
    </div>
  )
}
