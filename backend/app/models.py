from sqlalchemy import Column, Integer, String, Text, TIMESTAMP
from app.database import Base

class Noticia(Base):
    __tablename__ = "noticias"
    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(Text, nullable=False)
    conteudo = Column(Text, nullable=False)
    imagem_url = Column(String)
    data_publicacao = Column(TIMESTAMP)

class Patrocinador(Base):
    __tablename__ = "patrocinadores"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    logo_url = Column(String)
    link = Column(String)
