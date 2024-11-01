import React from "react"
import { IPhoto } from "../../../types/photo.type"
import { PhotoCard } from "./PhotoCard"

interface PhotosListProps {
  photos: IPhoto[]
}

export const PhotosList: React.FC<PhotosListProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  )
}
