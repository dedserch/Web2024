import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IAlbum } from '../types/album.type'
import { IUser } from '../types/user.type'
import { AlbumService } from '../service/AlbumService'
import { UserService } from '../service/UserService'
import { AlbumsList } from '../components/shared/AlbumsList/AlbumsList'
import { Loading } from '../components/ui/Loading'
import { UserCard } from '../components/shared/UsersList/UserCard'


export const User: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [albums, setAlbums] = useState<IAlbum[]>([])
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (id) {
      setLoading(true)
      AlbumService.getAllAlbumsByUser(Number(id)).then(data => {
        setAlbums(data)
        setLoading(false)
      })
      UserService.getByIdUsers(Number(id)).then(userData => {
        setUser(userData)
      })
    }
  }, [id])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto p-4">
      {user && (
        <div className="mb-4">
          <UserCard user={user} />
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Albums of {user?.username}</h1>
      <AlbumsList albums={albums} />
    </div>
  )
}
