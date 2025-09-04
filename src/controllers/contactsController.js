const contactsModels = require('../models/contactsModels'); 

const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactsModels.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao buscar todos os contatos' });
        console.error('Erro ao buscar todos os contatos:', error);
    }
};
const getContactById = async (req, res) => {
    const { id } = req.params;
    try {
        const contact = await contactsModels.getContactById(id);
        if (!contact) {
            res.status(404).json({ error: 'Contato não encontrado' });
        } else {    
            res.status(200).json(contact);
        }
    } catch (error) {
        res.status(500).json({ error: 'Falha ao buscar o contato' });
        console.error('Erro ao buscar o contato:', error);
    }
};
const createContact = async (req, res) => {
    const { nome, email, telefone, cidade, mensagem } = req.body;
    try {
        const newContact = await contactsModels.insertContact(nome, email, telefone, cidade, mensagem);
        res.status(201).json(newContact);
    }
    catch (error) {
        res.status(500).json({ error: 'Falha ao criar novo contato' });
        console.error('Erro ao criar novo contato:', error);
    }
};
const updateContact = async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, cidade, mensagem } = req.body;
    try {
        const updatedContact = await contactsModels.updateContact(id, nome, email, telefone, cidade, mensagem);
        if (!updatedContact) {
            res.status(404).json({ error: 'Contato não encontrado' });
        } else {
            res.status(200).json(updatedContact);
        }
    } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o contato' });
        console.error('Erro ao atualizar o contato:', error);
    }
};
const deleteContact = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedContact = await contactsModels.deleteContact(id);
        if (!deletedContact) {
            res.status(404).json({ error: 'Contato não encontrado' });
        }
        else {
            res.status(200).json('Contato deletado com sucesso');
        }
    } catch (error) {
        res.status(500).json({ error: 'Falha ao deletar o contato' });
        console.error('Erro ao deletar o contato:', error);
    }
};

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
};