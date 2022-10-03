import React, {useState, useEffect} from 'react'
import AddButton from '../commponents/AddButton'
import ListItem from '../commponents/ListItem'

const NotesList = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = async () => {
        const response = await fetch('/api/notes/')
        const data = await response.json()
        setNotes(data)
    }
  return (
    <div>
        <AddButton/>
        {notes.map((note, index) => (
            <ListItem key={index} note={note}/>
        ))}
    </div>
  )
}

export default NotesList