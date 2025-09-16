const { valida } = require('../src/controllers/notesController');

describe('valida', () => {
    test('deve retornar 400 se o título estiver faltando', () => {
        const req = {
            body: {
                titulo: '',
                conteudo: 'Conteúdo da nota'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const result = valida(req.body.titulo, req.body.conteudo, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Título e conteúdo são obrigatórios ' });
    });
});
