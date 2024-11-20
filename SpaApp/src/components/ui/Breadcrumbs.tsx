import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

export const Breadcrumbs: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const paths = ["home", ...location.pathname.split("/").filter(Boolean)]

  const handleBreadcrumbClick = (index: number) => {
    const path = index === 0 ? "/" : `/${paths.slice(1, index + 1).join("/")}`
    navigate(path)
  }

  return (
    <nav className="text-sm text-gray-600 mb-4">
      {paths.map((path, index) => (
        <span
          key={index}
          onClick={() => handleBreadcrumbClick(index)}
          className="cursor-pointer hover:text-blue-500"
        >
          {path.replace(/-/g, " ")}
          {index < paths.length - 1 && " / "}
        </span>
      ))}
    </nav>
  )
}
