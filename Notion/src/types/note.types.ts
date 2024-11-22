export interface INote {
    id: string
    authorId: string
    title: string
    body: string
    createdAt: string
}

export type NoteToCreate = Omit<INote, "id" | "createdAt">

export type NoteToUpdate = Omit<INote, "id" | "createdAt">