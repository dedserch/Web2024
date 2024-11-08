import React from "react"
import { IAlbum } from "../../../types/album.type"
import { AlbumCard } from "./AlbumCard"

interface AlbumsListProps {
  albums: IAlbum[]
}

export const AlbumsList: React.FC<AlbumsListProps> = ({ albums }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  )
}
