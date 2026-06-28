from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from dotenv import load_dotenv

from .waitlist import add_to_waitlist, WaitlistRequest, WaitlistResponse
from .stripe_api import create_checkout_session, CheckoutRequest, CheckoutResponse

load_dotenv()

app = FastAPI()

DIST_DIR = Path(__file__).resolve().parent.parent / "dist"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/waitlist", response_model=WaitlistResponse)
def api_waitlist(req: WaitlistRequest):
    return add_to_waitlist(req)

@app.post("/api/checkout", response_model=CheckoutResponse)
def api_checkout(req: CheckoutRequest):
    return create_checkout_session(req)

# Serve Vite build output with SPA fallback for client-side routing
app.mount("/assets", StaticFiles(directory=str(DIST_DIR / "assets")), name="assets")

@app.get("/{full_path:path}")
def spa_fallback(full_path: str):
    """Serve index.html for all non-API routes to support React Router."""
    file_path = DIST_DIR / full_path
    if file_path.is_file():
        return FileResponse(file_path)
    return FileResponse(DIST_DIR / "index.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("tools.main:app", host="127.0.0.1", port=8000, reload=True)
