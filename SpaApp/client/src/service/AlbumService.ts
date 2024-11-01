import { instance } from "../api/axios"
import { IAlbum } from "../types/album.type"
import { PhotoService } from "./PhotoService"

export class AlbumService {
  public static async getAllAlbums(): Promise<IAlbum[]> {
    const { data: albums } = await instance.get<IAlbum[]>("/albums")

    const albumsWithPhotos = await Promise.all(
      albums.map(async (album) => {
        const photos = await PhotoService.getAllPhotosByAlbum(album.id)
        return { ...album, photo: photos }
      })
    )

    return albumsWithPhotos
  }

  public static async getAllAlbumsByUser(userId: number): Promise<IAlbum[]> {
    const { data: albums } = await instance.get<IAlbum[]>("/albums", {
      params: { userId },
    })

    const albumsWithPhotos = await Promise.all(
      albums.map(async (album) => {
        const photos = await PhotoService.getAllPhotosByAlbum(album.id)
        return { ...album, photo: photos }
      })
    )

    return albumsWithPhotos
  }
  
  public static async getAlbumById(albumId: number): Promise<IAlbum> {
    const { data: album } = await instance.get<IAlbum>(`/albums/${albumId}`)
    const photos = await PhotoService.getAllPhotosByAlbum(albumId)
    return { ...album, photo: photos }
  }
  
}
