from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.routes import noticias, patrocinadores

app = FastAPI()

# Configuração do CORS para permitir requisições de qualquer origem
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir requisições de qualquer origem
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos os métodos HTTP
    allow_headers=["*"],  # Permitir todos os cabeçalhos
)

# Serve arquivos estáticos (como favicon.ico)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Roteamento de módulos
app.include_router(noticias.router)
app.include_router(patrocinadores.router)

# Rota inicial
@app.get("/")
def index():
    return {"message": "API do Portal de Notícias"}

# Rota de saúde para verificação de status
@app.get("/health")
def health_check():
    return {"status": "ok"}
