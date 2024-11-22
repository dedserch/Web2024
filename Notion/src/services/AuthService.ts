import { UserService } from "./UserService"
import { IUser, UserToAuth } from "../types/user.types"
import { IAuthRequest } from "../types/auth.types"

export class AuthService {
  static async login({ email, password }: IAuthRequest): Promise<IUser> {
    const user = await UserService.findBy({ email, password })
    if (!user) {
      throw new Error("Invalid email or password")
    }
    return user
  }

  static async register(user: UserToAuth): Promise<IUser> {
    return await UserService.create(user)
  }

  static async logout() {
    localStorage.removeItem("userId")
  }
}
