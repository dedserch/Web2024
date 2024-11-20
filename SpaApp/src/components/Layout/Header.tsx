import React from "react"
import { Navigation } from "../ui/Navigation"

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <h1 className="text-2xl font-semibold tracking-wide">Api & Spa</h1>
      <Navigation />
    </header>
  )
}
