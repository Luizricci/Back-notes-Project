    CREATE DATABASE notes_db;

    \c notes_db;



CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    arquivado BOOLEAN DEFAULT FALSE,
    favorito BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    cidade VARCHAR(100),
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    mensagem TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO notes (titulo, conteudo, arquivado, favorito) 
VALUES
('Título da nota', '<p>Conteúdo <strong>HTML</strong> gerado pelo TinyMCE</p>', FALSE, FALSE),
('Ideias para o Projeto', '<p>Lista de <em>melhorias</em> para implementar:</p><ul><li>Sistema de busca</li><li>Categorias</li><li>Tags</li></ul>', FALSE, TRUE),
('Reunião de Equipe', '<p><strong>Data:</strong> 15/10/2025</p><p><strong>Tópicos:</strong></p><ol><li>Review do sprint</li><li>Planejamento próxima semana</li></ol>', FALSE, FALSE),
('Tutorial Node.js', '<p>Passos para criar uma <strong>API REST</strong>:</p><p>1. Configurar Express</p><p>2. Conectar banco de dados</p><p>3. Criar rotas</p>', TRUE, TRUE),
('Lista de Compras', '<p>Itens para comprar:</p><ul><li>Café</li><li>Açúcar</li><li>Leite</li><li>Pão</li></ul>', FALSE, FALSE),
('Anotações de Estudo', '<p>Conceitos importantes de <em>JavaScript</em>:</p><p>- Promises e async/await</p><p>- Closures</p><p>- Event Loop</p>', FALSE, TRUE),
('Feedback do Cliente', '<p>Comentários sobre a nova versão:</p><blockquote>O sistema está muito mais rápido e intuitivo!</blockquote>', TRUE, FALSE),
('Receita de Bolo', '<p><strong>Ingredientes:</strong></p><ul><li>3 ovos</li><li>1 xícara de açúcar</li><li>2 xícaras de farinha</li></ul><p><strong>Modo de preparo:</strong> Misture tudo e asse por 40 min.</p>', FALSE, FALSE);

INSERT INTO contacts (cidade, nome, email, telefone, mensagem)
VALUES
('São Paulo', 'João Silva', 'joao.silva@example.com', '11999887766', 'Olá, este é um teste de mensagem.'),
('Rio de Janeiro', 'Maria Santos', 'maria.santos@email.com', '21987654321', 'Gostaria de saber mais sobre os serviços oferecidos.'),
('Belo Horizonte', 'Pedro Oliveira', 'pedro.oliveira@gmail.com', '31876543210', 'Tenho interesse em uma parceria comercial.'),
('Curitiba', 'Ana Costa', 'ana.costa@hotmail.com', '41765432109', 'Preciso de suporte técnico para implementação.'),
('Salvador', 'Carlos Ferreira', 'carlos.ferreira@empresa.com.br', '71654321098', 'Parabéns pelo excelente trabalho desenvolvido!'),
('Fortaleza', 'Juliana Lima', 'juliana.lima@yahoo.com', '85543210987', 'Gostaria de agendar uma reunião para discutir o projeto.'),
('Brasília', 'Roberto Alves', 'roberto.alves@outlook.com', '61432109876', 'Estou enfrentando problemas com a integração da API.'),
('Porto Alegre', 'Fernanda Rocha', 'fernanda.rocha@uol.com.br', '51321098765', 'Solicito orçamento para desenvolvimento de sistema similar.');

