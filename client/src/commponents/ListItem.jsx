import React from 'react'
import { Link } from "react-router-dom";

const ListItem = ({note}) => {

  const getUpdatedTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
  }

  return (
    <Link to={`${note.id}`}>
      <div className='notes-item'>
      {note.body.length > 65 ? (
        <h3>{note.body.slice(0, 62)}...</h3>
      ): (
        <h3>{note.body}</h3>
      )}
      <p><span>{getUpdatedTime(note)}</span></p>
      </div>
    </Link>
  )
}

export default ListItem