import { IAlbum } from "./album.type"

export interface IUser {
    id: number
    username: string
    email: string
    phone: string
    website: string
    album: IAlbum[]
}