import React from 'react';
import { Button } from 'react-bootstrap';
import './NoteCard.css';

const NoteCard = ({ note, noteNumber, editNote, setEditNote, handleUpdateNote, handleEditNote, handleDeleteNote }) => {

    const handleEdit = () => {
      handleEditNote(note);
    };
  
    const handleDelete = () => {
      handleDeleteNote(note.id); // Ensure that the note._id is passed to handleDeleteNote
    };

    const handleUpdate = () => {
      handleUpdateNote(); // Call the handleUpdateNote function when the Update button is clicked
    };
  
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">Note {noteNumber}</p>
          <p>{note.content}</p>
        </div>
        <div className="flip-card-back">
          <textarea value={editNote.content} onChange={(e) => setEditNote({ ...editNote, content: e.target.value })}></textarea>
          <Button className="but" onClick={handleEdit}>Edit</Button>
          <Button className="but" onClick={handleDelete}>Delete</Button>
          <Button className="but" onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
