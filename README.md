# Back-Notes API 📝

Uma API REST para gerenciamento de notas desenvolvida em Node.js com Express e PostgreSQL, compatível com editores HTML como TinyMCE.

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **PostgreSQL** - Banco de dados relacional

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 20 ou superior) - [Download aqui](https://nodejs.org/)
- **PostgreSQL** (versão 12 ou superior) - [Download aqui](https://www.postgresql.org/download/)
- **npm** (geralmente vem com o Node.js) ou **yarn**
- **Git** - [Download aqui](https://git-scm.com/)

### Verificando a instalação:
```bash
node --version    # deve retornar v16.x.x ou superior
npm --version     # deve retornar a versão do npm
git --version     # deve retornar a versão do Git
```

## 📁 Estrutura do Projeto

```
back-notes/
├── src/
│   ├── config/
│   │   └── database.js      # Configuração do banco PostgreSQL
│   ├── controllers/
│   │   ├── notesController.js
│   │   └── contactsController.js
│   ├── database/
│   │   └── schema.sql       # Esquema do banco de dados
│   ├── models/
│   │   ├── notesModels.js
│   │   └── contactsModels.js
│   └── routes/
│       ├── notesRoutes.js
│       └── contactsRoutes.js
├── server.js               # Arquivo principal do servidor
├── package.json
└── README.md
```

## ⚙️ Configuração

### 1. Clone o repositório e entre na pasta
```bash
git clone https://github.com/Luizricci/Back-notes-Project.git &&
cd back-notes
```
### 2. Instale as dependências
```bash
npm install
```

### 3. Abra seu VScode ou sua IDE
```bash
code .
```


### 4. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_USER=seu_usuario_postgres
DB_HOST=localhost
DB_NAME=notes_db
DB_PASSWORD=sua_senha
DB_PORT=sua_porta_do_postgres
PORT=3000 ou a porta que achar melhor
```

### 5. Configure o banco de dados
Execute o script SQL localizado em `src/database/schema.sql` no seu PostgreSQL:

```sql
CREATE DATABASE notes_db;

\c notes_db;

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mensagem TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```


O servidor estará rodando em `http://localhost:3000`

## 📚 API Endpoints

### Notas

#### GET /api/notes
Retorna todas as notas cadastradas.

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Minha Nota",
    "conteudo": "<p>Conteúdo <strong>HTML</strong> da nota</p>",
    "created_at": "2025-09-09T10:30:00.000Z",
    "updated_at": "2025-09-09T10:30:00.000Z"
  }
]
```

#### POST /api/notes
Cria uma nova nota.

**Body:**
```json
{
  "titulo": "Nova Nota",
  "conteudo": "<p>Conteúdo <strong>HTML</strong> gerado pelo TinyMCE</p>"
}
```

**Resposta:**
```json
{
  "id": 2,
  "titulo": "Nova Nota",
  "conteudo": "<p>Conteúdo <strong>HTML</strong> gerado pelo TinyMCE</p>",
  "created_at": "2025-09-09T10:35:00.000Z",
  "updated_at": "2025-09-09T10:35:00.000Z"
}
```

### Contatos

#### GET /api/contacts
Retorna todos os contatos cadastrados.

#### POST /api/contacts
Cria um novo contato.

**Body:**
```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "mensagem": "Mensagem de contato"
}
```

## 🔧 Testando com Postman

1. **GET Todas as Notas:**
   - Método: `GET`
   - URL: `http://localhost:3000/api/notes`

2. **POST Nova Nota:**
   - Método: `POST`
   - URL: `http://localhost:3000/api/notes`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
       "titulo": "Teste via Postman",
       "conteudo": "<p>Esta é uma <em>nota</em> criada via <strong>Postman</strong></p>"
     }
     ```

## 💡 Funcionalidades

- ✅ CRUD de notas com suporte a conteúdo HTML
- ✅ Compatible com editores WYSIWYG (TinyMCE)
- ✅ Sistema de contatos
- ✅ CORS habilitado
- ✅ Variáveis de ambiente para configuração
- ✅ Estrutura modular (MVC)

## 📝 Notas Importantes

- O campo `conteudo` suporta HTML completo, sendo ideal para uso com editores como TinyMCE
- Todas as datas são armazenadas em formato UTC
- A API possui middleware CORS habilitado para requisições cross-origin

## 👨‍💻 Autor

**Luiz Henrique Ricci Aureliano**


⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
