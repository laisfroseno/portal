from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import noticias, patrocinadores

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas dos módulos
app.include_router(noticias.router)
app.include_router(patrocinadores.router)

# Rota raiz ("/")
@app.get("/")
def index():
    return {"message": "API do Portal de Notícias"}

# Rota de saúde ("/health")
@app.get("/health")
def health_check():
    return {"status": "ok"}
