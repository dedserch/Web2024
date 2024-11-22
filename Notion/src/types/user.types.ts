export interface IUser {
    id: string
    email: string
    password: string
    createdAt: number
}

export type UserToAuth = Omit<IUser, "id" | "createdAt">