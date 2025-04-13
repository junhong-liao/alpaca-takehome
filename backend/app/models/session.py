from datetime import datetime
from typing import Optional
import enum

from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text, Enum
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class SessionStatus(str, enum.Enum):
    SCHEDULED = "scheduled"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

class Session(Base):
    __tablename__ = "sessions"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(String, ForeignKey("clients.id"))
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    status = Column(Enum(SessionStatus), default=SessionStatus.SCHEDULED)
    location = Column(String)  # Could be home, clinic, etc.
    
    # Session details
    goals_worked_on = Column(Text)
    materials_used = Column(Text)
    session_notes = Column(Text)
    behavior_data = Column(Text)  # Could be JSON string for flexibility
    
    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    client = relationship("Client", back_populates="sessions")
    notes = relationship("Note", back_populates="session") 