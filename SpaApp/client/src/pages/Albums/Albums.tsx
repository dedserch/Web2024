import React, { useEffect, useState } from "react"
import { IAlbum } from "../../types/album.type"
import { AlbumService } from "../../service/AlbumService"
import { AlbumsList } from "../../components/shared/AlbumsList/AlbumsList"
import { Loading } from "../../components/ui/Loading"
import { Breadcrumbs } from "../../components/ui/Breadcrumbs"

export const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    AlbumService.getAllAlbums().then((data) => {
      setAlbums(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-4">All Albums</h1>
      <AlbumsList albums={albums} />
    </div>
  )
}
