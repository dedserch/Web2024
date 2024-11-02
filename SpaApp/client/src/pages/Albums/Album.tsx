import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AlbumService } from "../../service/AlbumService"
import { IUser } from "../../types/user.type"
import { IAlbum } from "../../types/album.type"
import { UserService } from "../../service/UserService"
import { PhotosList } from "../../components/shared/PhotosList/PhotosList"
import { Loading } from "../../components/ui/Loading"
import { Breadcrumbs } from "../../components/ui/Breadcrumbs"

export const Album: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>()
  const [album, setAlbum] = useState<IAlbum | null>(null)
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (albumId) {
      setLoading(true)
      AlbumService.getAlbumById(Number(albumId))
        .then((albumData) => {
          setAlbum(albumData)
          return UserService.getByIdUsers(albumData.userId)
        })
        .then((userData) => {
          setUser(userData)
          setLoading(false)
        })
    }
  }, [albumId])

  if (loading) return <Loading />

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs />
      {album && user && (
        <>
          <h1 className="text-2xl font-bold mb-4">{album.title}</h1>
          <p className="text-lg text-gray-700 mb-4">Album by {user.username}</p>
          <PhotosList photos={album.photo} />
        </>
      )}
    </div>
  )
}
