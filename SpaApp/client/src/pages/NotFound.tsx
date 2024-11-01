import React from "react"
import { NavLink } from "react-router-dom"

export const NotFound: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900 flex-grow flex items-center justify-center min-h-screen p-6">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <h2 className="text-9xl font-bold text-indigo-600">404</h2>
        <h1 className="text-4xl font-semibold text-gray-800">
          Oops! Page not found
        </h1>
        <p className="text-lg text-gray-600">
          We’re sorry, but the page you requested could not be found.
        </p>
        <NavLink
          to="/"
          className="inline-block mt-6 px-8 py-3 text-indigo-700 bg-indigo-100 rounded-md shadow-md hover:bg-indigo-200 hover:text-indigo-900 transition-all duration-200"
        >
          Back to Home
        </NavLink>
      </div>
    </div>
  )
}
