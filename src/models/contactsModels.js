const pool = require("../config/database");

const getAllContacts = async () => {
    const result = await pool.query('SELECT * FROM contacts');
    return result.rows;
}
const getContactById = async (id) => {
    const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return result.rows[0];
}
const insertContact = async (nome, email, telefone, cidade, mensagem) => {
    const result = await pool.query(
        'INSERT INTO contacts (nome, email, telefone, cidade, mensagem) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nome, email, telefone, cidade, mensagem]
    );
    return result.rows[0];
}
const updateContact = async (id, nome, email, telefone, cidade, mensagem) => {
    const result = await pool.query(
        'UPDATE contacts SET nome = $1, email = $2, telefone = $3, cidade = $4, mensagem = $5 WHERE id = $6 RETURNING *',
        [nome, email, telefone, cidade, mensagem, id]
    );
    return result.rows[0];
}
const deleteContact = async (id) => {
    const result = await pool.query(
        'DELETE FROM contacts WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

module.exports = {
    getAllContacts,
    insertContact,
    getContactById,
    updateContact,
    deleteContact
};