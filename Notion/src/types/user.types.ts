export interface IUser {
    id: string
    email: string
    password: string
    createdAt: string
}

export type UserToAuth = Omit<IUser, "id" | "createdAt">