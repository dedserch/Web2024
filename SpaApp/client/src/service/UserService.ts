import { instance } from "../api/axios"
import { IUser } from "../types/user.type"

export class UserService {
  public static async getAllUsers(): Promise<IUser[]> {
    const { data } = await instance.get("/users")
    return data
  }

  public static async getByIdUsers(id: number): Promise<IUser> {
    const { data } = await instance.get(`/users/${id}`)
    return data
  }
}
