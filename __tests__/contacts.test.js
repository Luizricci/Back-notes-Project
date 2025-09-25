const { valida, createContact } = require('../src/controllers/contactsController');
const contactsModels = require('../src/models/contactsModels');

// Mock do módulo contactsModels
jest.mock('../src/models/contactsModels');

describe('valida', () => {
    test('deve retornar 400 se algum campo estiver faltando', () => {
        const req = {
            body: {
                nome: '',
                email: 'email@example.com',
                telefone: '123456789',
                cidade: 'Cidade',
                mensagem: 'Mensagem'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const result = valida(req.body.nome, req.body.email, req.body.telefone, req.body.cidade, req.body.mensagem, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Todos os campos são obrigatórios ' });
    });

    test('deve retornar 400 se o email estiver faltando', () => {
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const result = valida('João Silva', '', '11999999999', 'São Paulo', 'Mensagem de teste', res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Todos os campos são obrigatórios ' });
    });
});

describe('createContact - Testes de Erro POST', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {}
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
        
        // Limpar todos os mocks antes de cada teste
        jest.clearAllMocks();
        
        // Mock do console.error para evitar logs durante os testes
        console.error = jest.fn();
    });

    test('deve retornar erro 400 quando nome está vazio no POST', async () => {
        // Arrange
        req.body = {
            nome: '',
            email: 'test@email.com',
            telefone: '11999999999',
            cidade: 'São Paulo',
            mensagem: 'Mensagem de teste'
        };

        // Act
        await createContact(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Todos os campos são obrigatórios ' });
        expect(contactsModels.insertContact).not.toHaveBeenCalled();
    });

    test('deve retornar erro 500 quando insertContact falha no banco de dados', async () => {
        // Arrange
        req.body = {
            nome: 'João Silva',
            email: 'joao@email.com',
            telefone: '11999999999',
            cidade: 'São Paulo',
            mensagem: 'Mensagem de teste'
        };

        const databaseError = new Error('Database connection failed');
        contactsModels.insertContact.mockRejectedValue(databaseError);

        // Act
        await createContact(req, res);

        // Assert
        expect(contactsModels.insertContact).toHaveBeenCalledWith(
            'João Silva',
            'joao@email.com',
            '11999999999',
            'São Paulo',
            'Mensagem de teste'
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Falha ao criar novo contato' });
        expect(console.error).toHaveBeenCalledWith('Erro ao criar novo contato:', databaseError);
    });
});
