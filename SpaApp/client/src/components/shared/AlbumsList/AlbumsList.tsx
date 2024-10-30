import React, { useEffect, useState } from 'react'
import { IAlbum } from '../../../types/album.type'
import { AlbumService } from '../../../service/AlbumService'
import { AlbumCard } from './AlbumCard'


export const AlbumsList: React.FC = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([])

  useEffect(() => {
    AlbumService.getAllAlbums().then(data => setAlbums(data))
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {albums.map(album => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  )
}