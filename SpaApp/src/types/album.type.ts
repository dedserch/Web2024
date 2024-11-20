import { IPhoto } from "./photo.type"

export interface IAlbum {
    id: number
    userId: number
    title: string
    photo: IPhoto[]
}