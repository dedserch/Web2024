import { instance } from "../api/axios"
import { IAlbum } from "../types/album.type"

export class AlbumService {
  public static async getAllAlbums(): Promise<IAlbum[]> {
    const { data } = await instance.get("/albums")
    return data
  }

  public static async getAllAlbumsByUser(userId: number): Promise<IAlbum[]> {
    const { data } = await instance.get("/albums")
    return data.filter((album: IAlbum) => album.userId === userId)
  }
}
