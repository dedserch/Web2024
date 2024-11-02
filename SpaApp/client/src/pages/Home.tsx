import React from "react"

export const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API & SPA</h1>
        <h2 className="text-lg md:text-2xl font-medium mb-6">
          Educational project developed for learning React Router DOM and Axios.
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          This website serves as an assignment for my Web Programming course at
          Belarusian State University. It demonstrates the use of React, React
          Router, Axios, and the {`{JSON}`} Placeholder API to create a
          multi-page application.
        </p>
      </div>
    </div>
  )
}
