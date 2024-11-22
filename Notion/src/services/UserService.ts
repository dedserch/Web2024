import { instance } from "../api/axios"
import { IAuthRequest } from "../types/auth.types"
import { IUser, UserToAuth } from "../types/user.types"

export class UserService {
  static async create(user: UserToAuth): Promise<IUser> {
    const response = await instance.post("/users", user)
    return response.data
  }

  static async findBy(params: IAuthRequest): Promise<IUser | null> {
    const response = await instance.get("/users", { params })
    return response.data[0] || null
  }
}
