
const notesModels = require('../models/notesModels');

const getAllNotes = async (req, res) => {
    try {
        const notes = await notesModels.getAllNotes();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao buscar todas as notas' });
        console.error('Erro ao buscar todas as notas:', error);
    }
};

const getNoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await notesModels.getNoteById(id);
        if (!note) {
            res.status(404).json({ error: 'Nota não encontrada' });
        } else {    
            res.status(200).json(note);
        }
    } catch (error) {
        res.status(500).json({ error: 'Falha ao buscar a nota' });
        console.error('Erro ao buscar a nota:', error);
    }
};

const createNote = async (req, res) => {
    const { titulo, conteudo, arquivado, favorito } = req.body;
    try {
        const newNote = await notesModels.insertNote(titulo, conteudo, arquivado, favorito);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao criar nova nota' });
        console.error('Erro ao criar nova nota:', error);
    }
};

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, arquivado, favorito } = req.body;
    try {
        const updatedNote = await notesModels.updateNote(id, titulo, conteudo, arquivado, favorito);
        if (!updatedNote) {
            res.status(404).json({ error: 'Nota não encontrada' });
        } else {
            res.status(200).json(updatedNote);
        }
    } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar a nota' });
        console.error('Erro ao atualizar a nota:', error);
    }
};

const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedNote = await notesModels.deleteNote(id);
        if (!deletedNote) {
            res.status(404).json({ error: 'Nota não encontrada' });
        } else {
            res.status(200).json('nota deletada com sucesso');
        }
    } catch (error) {
        res.status(500).json({ error: 'Falha ao deletar a nota' });
        console.error('Erro ao deletar a nota:', error);
    }
};

module.exports = {
    getAllNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote
};