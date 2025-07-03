import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routes import noticias, patrocinadores

app = FastAPI()

# Configurações de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todas as origens (ajuste conforme necessário)
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos os cabeçalhos
)

# Serve arquivos estáticos (como favicon.ico)
static_dir = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=static_dir), name="static")

@app.get("/favicon.ico")
async def favicon():
    return FileResponse(os.path.join(static_dir, "favicon.ico"))

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