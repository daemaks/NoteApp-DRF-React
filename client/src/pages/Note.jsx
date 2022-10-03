import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/chevron-left-circle.svg";

const Note = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [params.id]);

  const getNote = async () => {
    if (params.id === 'new') return
    const response = await fetch(`/api/notes/${params.id}/`);
    const data = await response.json();
    setNote(data);
  };

  const createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/notes/");
  };

  const updateNote = async () => {
    fetch(`/api/notes/${params.id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/notes/");
  };

  const deleteNote = async () => {
    fetch(`/api/notes/${params.id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/notes/");
  };

  const handleSubmit = () => {
    if (params.id !== "new" && !note.body) {
      deleteNote()
    } else if (params.id !== "new") {
      updateNote()
    } else if (params.id === "new" && note.body == null) {
      navigate("/notes/");
    }
  }
  const handleChange = (value) => {
    setNote(note => ({ ...note, 'body': value }))
    console.log('Handle Change:', note)
  }

  return (
    <div>
      <div>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
          {params.id !== 'new' ? (
            <button onClick={deleteNote}>Delete</button>
          ): (
            <button onClick={createNote}>Create</button>
          )}
        </h3>
      </div>
      <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
    </div>
  );
};

export default Note;
