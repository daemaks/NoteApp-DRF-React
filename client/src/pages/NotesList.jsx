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
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'><AddButton/></h2>
            <p className='notes-count'>Count: {notes.length}</p>

        </div>
        <div className='notes-list'>
            {notes.map((note, index) => (
                <ListItem key={index} note={note}/>))}
        </div>
    </div>
  )
}

export default NotesList