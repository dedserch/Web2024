import React, { useState, useContext } from "react"
import { Input } from "../../ui/Input"
import { Button } from "../../ui/Button"
import { AuthService } from "../../../services/AuthService"
import { IAuthForm } from "../../../types/auth.types"
import { UserContext, IUserContext } from "../../../Context/UserContextProvider"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ValidationService } from "../../../services/ValidationService"
import { ToastContainer } from "react-toastify"
import { Validation } from "../../../types/validation.enum"

export const AuthForm: React.FC = () => {
  const { onChange } = useContext(UserContext) as IUserContext
  const [isSignUp, setIsSignUp] = useState(true)
  const [formValues, setFormValues] = useState<IAuthForm>({
    email: "",
    password: "",
    repeatPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const toggleMode = () => {
    setIsSignUp(!isSignUp)
    setFormValues({
      email: "",
      password: "",
      repeatPassword: "",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { email, password, repeatPassword } = formValues

    if (!ValidationService.validateEmail(email)) {
      toast.error(Validation.INVALID_EMAIL)
      return
    }

    if (!ValidationService.validatePassword(password)) {
      toast.error(Validation.INVALID_PASSWORD)
      return
    }

    if (isSignUp && !ValidationService.validatePasswordMatch(password, repeatPassword)) {
      toast.error(Validation.PASSWORDS_DO_NOT_MATCH)
      return
    }

    try {
      if (isSignUp) {
        const user = await AuthService.register({ email, password })
        onChange(user)
        toast.success(Validation.REGISTRATION_SUCCESS)
        window.location.href = "/"
      } else {
        const user = await AuthService.login({ email, password })
        onChange(user)
        toast.success(Validation.LOGIN_SUCCESS)
        window.location.href = "/"
      }
    } catch (err: any) {
      toast.error(err.message || (isSignUp ? Validation.REGISTRATION_FAILED : Validation.LOGIN_FAILED))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="w-full max-w-md p-10 bg-white rounded-xl shadow-xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            name="email"
            value={formValues.email}
            placeholder="Email"
            onChange={handleInputChange}
            type="text"
          />
          <Input
            name="password"
            value={formValues.password}
            placeholder="Password"
            onChange={handleInputChange}
            type="password"
          />
          {isSignUp && (
            <Input
              name="repeatPassword"
              value={formValues.repeatPassword}
              placeholder="Repeat Password"
              onChange={handleInputChange}
              type="password"
            />
          )}
          <div className="flex justify-center">
            <Button name={isSignUp ? "Sign Up" : "Sign In"} />
          </div>
        </form>
        <span
          className="text-sm text-indigo-600 cursor-pointer hover:underline mt-6 block text-center"
          onClick={toggleMode}
        >
          {isSignUp
            ? "Already have an account? Login here"
            : "Don't have an account? Sign up here"}
        </span>
      </div>
      <ToastContainer />
    </div>
  )
}