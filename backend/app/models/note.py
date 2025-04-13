from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from app.db.base_class import Base

class NoteType(str, enum.Enum):
    SESSION = "session"
    PROGRESS = "progress"
    BEHAVIOR = "behavior"
    ASSESSMENT = "assessment"

class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("sessions.id"))
    type = Column(Enum(NoteType), default=NoteType.SESSION)
    content = Column(Text, nullable=False)
    
    # Metadata
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_by = Column(String)  # Could be therapist ID or name
    
    # Template data (if note was generated from a template)
    template_id = Column(String, nullable=True)
    template_data = Column(Text, nullable=True)  # JSON string of template variables
    
    # Relationships
    session = relationship("Session", back_populates="notes") 