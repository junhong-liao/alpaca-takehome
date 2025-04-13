from app.api.v1.api import api_router
from fastapi import APIRouter
from app.api.v1.endpoints import clients, sessions

api_router = APIRouter()
api_router.include_router(clients.router, prefix="/clients", tags=["clients"])
api_router.include_router(sessions.router, prefix="/sessions", tags=["sessions"]) 