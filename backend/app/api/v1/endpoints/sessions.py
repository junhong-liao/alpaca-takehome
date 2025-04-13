from typing import List
from datetime import datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.session import Session, SessionCreate, SessionUpdate
from app.models.session import Session as SessionModel, SessionStatus
from app.models.client import Client as ClientModel

router = APIRouter()


@router.get("/", response_model=List[Session])
def get_sessions(
    skip: int = 0,
    limit: int = 100,
    client_id: str = None,
    start_date: datetime = None,
    end_date: datetime = None,
    status: SessionStatus = None,
    db: Session = Depends(get_db)
):
    """
    Retrieve sessions.
    """
    query = db.query(SessionModel)
    
    # Apply filters
    if client_id:
        query = query.filter(SessionModel.client_id == client_id)
    if start_date:
        query = query.filter(SessionModel.start_time >= start_date)
    if end_date:
        query = query.filter(SessionModel.end_time <= end_date)
    if status:
        query = query.filter(SessionModel.status == status)
    
    return query.offset(skip).limit(limit).all()


@router.post("/", response_model=Session, status_code=status.HTTP_201_CREATED)
def create_session(session: SessionCreate, db: Session = Depends(get_db)):
    """
    Create new session.
    """
    # Verify client exists
    client = db.query(ClientModel).filter(ClientModel.id == session.client_id).first()
    if not client:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client not found"
        )
    
    # Validate session time
    if session.end_time <= session.start_time:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="End time must be after start time"
        )
    
    # Create session
    db_session = SessionModel(
        **session.dict(),
        status=SessionStatus.SCHEDULED
    )
    db.add(db_session)
    db.commit()
    db.refresh(db_session)
    return db_session


@router.put("/{session_id}", response_model=Session)
def update_session(
    session_id: int,
    session_update: SessionUpdate,
    db: Session = Depends(get_db)
):
    """
    Update a session.
    """
    db_session = db.query(SessionModel).filter(SessionModel.id == session_id).first()
    if not db_session:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found"
        )
    
    # Update fields
    for field, value in session_update.dict(exclude_unset=True).items():
        setattr(db_session, field, value)
    
    db.commit()
    db.refresh(db_session)
    return db_session


@router.get("/{session_id}", response_model=Session)
def get_session(session_id: int, db: Session = Depends(get_db)):
    """
    Get session by ID.
    """
    session = db.query(SessionModel).filter(SessionModel.id == session_id).first()
    if not session:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found"
        )
    return session


@router.delete("/{session_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_session(session_id: int, db: Session = Depends(get_db)):
    """
    Delete a session.
    """
    db_session = db.query(SessionModel).filter(SessionModel.id == session_id).first()
    if not db_session:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found"
        )
    
    db.delete(db_session)
    db.commit()
    return None 