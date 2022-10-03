import React from 'react'
import { Link } from "react-router-dom";

const ListItem = ({note}) => {
  return (
    <Link to={`${note.id}`}>
        <h3>{note.body.slice(0, 30)}</h3>
    </Link>
  )
}

export default ListItem