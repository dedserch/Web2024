import React from 'react'
import { IAlbum } from '../../../types/album.type'


interface AlbumCardProps {
  album: IAlbum
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-100 transition">
      <h2 className="text-lg font-semibold">{album.title}</h2>
      <p className="text-gray-600">Photos: {album.photo.length}</p>
    </div>
  )
}