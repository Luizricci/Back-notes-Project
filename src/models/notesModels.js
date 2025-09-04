const pool = require("../config/database");


const getAllNotes = async () => {
    const result = await pool.query('SELECT * FROM notes');
    return result.rows;
}

const getNoteById = async (id) => {
    const result = await pool.query('SELECT * FROM notes WHERE id = $1', [id]);
    return result.rows[0];
}

const insertNote = async (titulo, conteudoHtml) => {
    const result = await pool.query(
        'INSERT INTO notes (titulo, conteudo) VALUES ($1, $2) RETURNING *',
        [titulo, conteudoHtml]
    );
    return result.rows[0];
};

const updateNote = async (id, titulo, conteudoHtml) => {
    const result = await pool.query(
        'UPDATE notes SET titulo = $1, conteudo = $2 WHERE id = $3 RETURNING *',
        [titulo, conteudoHtml, id]
    );
    return result.rows[0];
}

const deleteNote = async (id) => {
    const result = await pool.query(
        'DELETE FROM notes WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

module.exports = {
    getAllNotes,
    insertNote,
    getNoteById,
    updateNote,
    deleteNote
};