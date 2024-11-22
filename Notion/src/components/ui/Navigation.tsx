import React from "react"
import { NavLink } from "react-router-dom"
import { AuthService } from "../../services/AuthService"

export const Navigation: React.FC = () => {
  const handleLogout = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    await AuthService.logout()
    window.location.href = "/auth"
  }

  return (
    <nav className="flex space-x-6 text-lg">
      <NavLink
        to="/"
        className="hover:text-gray-200 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-200"
      >
        About
      </NavLink>
      <NavLink
        to="/notes"
        className="hover:text-gray-200 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-200"
      >
        Notes
      </NavLink>
      <NavLink
        to="/auth"
        onClick={handleLogout}
        className="hover:text-gray-200 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-200"
      >
        Log out
      </NavLink>
    </nav>
  )
}
