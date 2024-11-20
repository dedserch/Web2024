import { instance } from "../api/axios"
import { IAlbum } from "../types/album.type"
import { PhotoService } from "./PhotoService"

export class AlbumService {
  private static async fetchAlbumsWithPhotos(albums: IAlbum[]): Promise<IAlbum[]> {
    return Promise.all(
      albums.map(async (album) => ({
        ...album,
        photo: await PhotoService.getAllPhotosByAlbum(album.id),
      }))
    )
  }

  public static async getAllAlbums(): Promise<IAlbum[]> {
    const { data: albums } = await instance.get<IAlbum[]>("/albums")
    return this.fetchAlbumsWithPhotos(albums)
  }

  public static async getAllAlbumsByUser(userId: number): Promise<IAlbum[]> {
    const { data: albums } = await instance.get<IAlbum[]>("/albums", {
      params: { userId },
    })
    return this.fetchAlbumsWithPhotos(albums)
  }

  public static async getAlbumById(albumId: number): Promise<IAlbum> {
    const { data: album } = await instance.get<IAlbum>(`/albums/${albumId}`)
    const photos = await PhotoService.getAllPhotosByAlbum(albumId)
    return { ...album, photo: photos }
  }
}
