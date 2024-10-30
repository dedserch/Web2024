import { instance } from "../api/axios"
import { IPhoto } from "../types/photo.type"

export class PhotoService {
  public static async getAllPhotos(): Promise<IPhoto[]> {
    const { data } = await instance.get("/photos")
    return data
  }

  public static async getByIdPhoto(id: number): Promise<IPhoto> {
    const { data } = await instance.get(`/photos/${id}`)
    return data
  }
}
