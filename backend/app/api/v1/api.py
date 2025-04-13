from fastapi import APIRouter
from app.api.v1.endpoints import clients, sessions, notes

api_router = APIRouter()
api_router.include_router(clients.router, prefix="/clients", tags=["clients"])
api_router.include_router(sessions.router, prefix="/sessions", tags=["sessions"])
api_router.include_router(notes.router, prefix="/notes", tags=["notes"]) 