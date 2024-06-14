const Note = require('../models/noteModel');

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes' });
    }
};

const createNote = async (req, res) => {
    try {
        const { content } = req.body;
        const newNote = new Note({
            content,
        });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: 'Error creating note' });
    }
};

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(id, { content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: 'Error updating note' });
    }
};

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting note' });
    }
};

module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
};
