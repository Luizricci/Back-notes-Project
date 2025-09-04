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
('Título da nota', '<p>Conteúdo <strong>HTML</strong> gerado pelo TinyMCE</p>', FALSE, FALSE);

INSERT INTO contacts (cidade, nome, email, telefone, mensagem)
VALUES
('São Paulo', 'João Silva', 'joao.silva@example.com', '123456789', 'Olá, este é um teste de mensagem.');

