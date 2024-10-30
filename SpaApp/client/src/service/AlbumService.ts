import { instance } from "../api/axios"
import { IAlbum } from "../types/album.type"

export class AlbumService {
  public static async getAllAlbums(): Promise<IAlbum[]> {
    const { data } = await instance.get("/albums")
    return data
  }

  public static async getByIdAlbum(id: number): Promise<IAlbum> {
    const { data } = await instance.get(`/albums/${id}`)
    return data
  }
}
