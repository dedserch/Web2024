import React, { useState, useContext } from "react"
import { Input } from "../../ui/Input"
import { Button } from "../../ui/Button"
import { AuthService } from "../../../services/AuthService"
import { IAuthForm } from "../../../types/auth.types"
import { UserContext, IUserContext } from "../../../Context/UserContextProvider"

export const AuthForm: React.FC = () => {
  const { onChange } = useContext(UserContext) as IUserContext
  const [isSignUp, setIsSignUp] = useState(true)
  const [formValues, setFormValues] = useState<IAuthForm>({
    email: "",
    password: "",
    repeatPassword: "",
  })
  const [error, setError] = useState<string | null>(null)

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
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignUp) {
      if (formValues.password !== formValues.repeatPassword) {
        setError("Passwords do not match")
        return
      }
      try {
        const user = await AuthService.register({
          email: formValues.email,
          password: formValues.password,
        })
        onChange(user)
        window.location.href = "/"
      } catch (err: any) {
        setError(err.message || "Registration failed")
      }
    } else {
      try {
        const user = await AuthService.login({
          email: formValues.email,
          password: formValues.password,
        })
        onChange(user)
        window.location.href = "/"
      } catch (err: any) {
        setError(err.message || "Invalid email or password")
      }
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
          {error && <p className="text-red-500 text-center">{error}</p>}
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
    </div>
  )
}