import React, { useEffect, useState } from 'react'
import { IPhoto } from '../../../types/photo.type'
import { PhotoService } from '../../../service/PhotoService'
import { PhotoCard } from './PhotoCard'


export const PhotosList: React.FC = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([])

  useEffect(() => {
    PhotoService.getAllPhotos().then(data => setPhotos(data))
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  )
}