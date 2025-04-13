from datetime import datetime
from typing import Optional, List

from pydantic import BaseModel, Field
from app.models.session import SessionStatus


class SessionBase(BaseModel):
    client_id: str
    start_time: datetime
    end_time: datetime
    location: str
    goals_worked_on: Optional[str] = None
    materials_used: Optional[str] = None
    session_notes: Optional[str] = None
    behavior_data: Optional[str] = None


class SessionCreate(SessionBase):
    pass


class SessionUpdate(BaseModel):
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None
    status: Optional[SessionStatus] = None
    location: Optional[str] = None
    goals_worked_on: Optional[str] = None
    materials_used: Optional[str] = None
    session_notes: Optional[str] = None
    behavior_data: Optional[str] = None


class Session(SessionBase):
    id: int
    status: SessionStatus
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 