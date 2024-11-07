import React from "react"
import { IPhoto } from "../../../types/photo.type"

interface PhotoCardProps {
  photo: IPhoto
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-100 transition">
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-semibold">{photo.title}</h2>
    </div>
  )
}
