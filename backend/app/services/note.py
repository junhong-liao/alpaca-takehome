from typing import List, Optional

from sqlalchemy.orm import Session

from app.models.note import Note
from app.schemas.note import NoteCreate, NoteUpdate


def get_note(db: Session, note_id: int) -> Optional[Note]:
    return db.query(Note).filter(Note.id == note_id).first()


def get_notes(
    db: Session, skip: int = 0, limit: int = 100
) -> List[Note]:
    return db.query(Note).offset(skip).limit(limit).all()


def create_note(db: Session, note_in: NoteCreate) -> Note:
    db_note = Note(**note_in.model_dump())
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note


def update_note(
    db: Session, note: Note, note_in: NoteUpdate
) -> Note:
    for field, value in note_in.model_dump(exclude_unset=True).items():
        setattr(note, field, value)
    db.add(note)
    db.commit()
    db.refresh(note)
    return note


def delete_note(db: Session, note_id: int) -> None:
    note = get_note(db=db, note_id=note_id)
    if note:
        db.delete(note)
        db.commit() 