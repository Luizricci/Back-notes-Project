const pool = require("../config/database");


const getAllNotes = async () => {
    const result = await pool.query('SELECT * FROM notes');
    return result.rows;
}

const getNoteById = async (id) => {
    const result = await pool.query('SELECT * FROM notes WHERE id = $1', [id]);
    return result.rows[0];
}

const insertNote = async (titulo, conteudoHtml, arquivado, favorito) => {
    const result = await pool.query(
        'INSERT INTO notes (titulo, conteudo, arquivado, favorito) VALUES ($1, $2, $3, $4) RETURNING *',
        [titulo, conteudoHtml, arquivado, favorito]
    );
    return result.rows[0];
};

const updateNote = async (id, titulo, conteudoHtml, arquivado, favorito) => {
    const result = await pool.query(
        'UPDATE notes SET titulo = $1, conteudo = $2, arquivado = $3, favorito = $4 WHERE id = $5 RETURNING *',
        [titulo, conteudoHtml, arquivado, favorito, id]
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