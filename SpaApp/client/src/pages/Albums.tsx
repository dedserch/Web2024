import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IAlbum } from '../types/album.type'
import { AlbumService } from '../service/AlbumService'
import { AlbumsList } from '../components/shared/AlbumsList/AlbumsList'


export const Albums: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [albums, setAlbums] = useState<IAlbum[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (id) {
      AlbumService.getAllAlbumsByUser(Number(id)).then(data => {
        setAlbums(data)
        setLoading(false)
      })
    }
  }, [id])

  if (loading) {
    return <div className="text-center py-4">Loading albums...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Albums of User {id}</h1>
      <AlbumsList albums={albums} />
    </div>
  )
}