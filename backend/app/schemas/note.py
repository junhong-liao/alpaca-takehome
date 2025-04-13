from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field
from app.models.note import NoteType


class NoteBase(BaseModel):
    session_id: int
    type: NoteType
    content: str
    created_by: str
    template_id: Optional[str] = None
    template_data: Optional[str] = None


class NoteCreate(NoteBase):
    pass


class NoteUpdate(BaseModel):
    content: Optional[str] = None
    type: Optional[NoteType] = None
    template_data: Optional[str] = None


class Note(NoteBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 