from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Noticia

router = APIRouter(prefix="/noticias")

# Dependência para injeção do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def listar_noticias(db: Session = Depends(get_db)):
    noticias = db.query(Noticia).all()
    return [
        {
            "id": n.id,
            "titulo": n.titulo,
            "imagem_url": n.imagem_url
        }
        for n in noticias
    ]
