from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Patrocinador

router = APIRouter(prefix="/patrocinadores")

# Dependência para injeção do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def listar_patrocinadores(db: Session = Depends(get_db)):
    patrocinadores = db.query(Patrocinador).all()
    return [
        {
            "id": p.id,
            "nome": p.nome,
            "logo_url": p.logo_url,
            "link": p.link
        }
        for p in patrocinadores
    ]
