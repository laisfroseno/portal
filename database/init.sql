CREATE TABLE IF NOT EXISTS noticias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    imagem_url TEXT,
    data_publicacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patrocinadores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    logo_url TEXT,
    link TEXT
);
