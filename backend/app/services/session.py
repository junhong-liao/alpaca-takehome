from typing import List, Optional

from sqlalchemy.orm import Session

from app.models.session import Session
from app.schemas.session import SessionCreate, SessionUpdate


def get_session(db: Session, session_id: int) -> Optional[Session]:
    return db.query(Session).filter(Session.id == session_id).first()


def get_sessions(
    db: Session, skip: int = 0, limit: int = 100
) -> List[Session]:
    return db.query(Session).offset(skip).limit(limit).all()


def create_session(db: Session, session_in: SessionCreate) -> Session:
    db_session = Session(**session_in.model_dump())
    db.add(db_session)
    db.commit()
    db.refresh(db_session)
    return db_session


def update_session(
    db: Session, session: Session, session_in: SessionUpdate
) -> Session:
    for field, value in session_in.model_dump(exclude_unset=True).items():
        setattr(session, field, value)
    db.add(session)
    db.commit()
    db.refresh(session)
    return session


def delete_session(db: Session, session_id: int) -> None:
    session = get_session(db=db, session_id=session_id)
    if session:
        db.delete(session)
        db.commit() 