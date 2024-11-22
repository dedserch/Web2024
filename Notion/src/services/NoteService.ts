import { instance } from "../api/axios"
import { NoteToCreate, NoteToUpdate, INote } from "../types/note.types"

export class NoteService {
  static async create(note: NoteToCreate): Promise<INote> {
    const noteWithTimestamp = {
      ...note,
      createdAt: new Date().toISOString(),
    }
    const response = await instance.post("/notes", noteWithTimestamp)
    return response.data
  }

  static async findById(id: string): Promise<INote | null> {
    const response = await instance.get(`/notes/${id}`)
    return response.data || null
  }

  static async getAll(): Promise<INote[]> {
    const response = await instance.get("/notes")
    return response.data
  }

  static async update(id: string, updatedNote: NoteToUpdate): Promise<INote> {
    const response = await instance.put(`/notes/${id}`, updatedNote)
    return response.data
  }

  static async delete(id: string): Promise<void> {
    await instance.delete(`/notes/${id}`)
  }
}
