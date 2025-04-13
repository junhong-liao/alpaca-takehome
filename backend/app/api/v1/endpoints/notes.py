from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.note import Note, NoteCreate, NoteUpdate
from app.services import note as note_service

router = APIRouter()


@router.get("/", response_model=List[Note])
def read_notes(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """
    Retrieve notes.
    """
    notes = note_service.get_notes(db, skip=skip, limit=limit)
    return notes


@router.post("/", response_model=Note)
def create_note(
    *,
    db: Session = Depends(get_db),
    note_in: NoteCreate
):
    """
    Create new note.
    """
    note = note_service.create_note(db=db, note_in=note_in)
    return note


@router.put("/{note_id}", response_model=Note)
def update_note(
    *,
    db: Session = Depends(get_db),
    note_id: int,
    note_in: NoteUpdate
):
    """
    Update a note.
    """
    note = note_service.get_note(db=db, note_id=note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    note = note_service.update_note(db=db, note=note, note_in=note_in)
    return note


@router.get("/{note_id}", response_model=Note)
def read_note(
    *,
    db: Session = Depends(get_db),
    note_id: int
):
    """
    Get note by ID.
    """
    note = note_service.get_note(db=db, note_id=note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    return note


@router.delete("/{note_id}")
def delete_note(
    *,
    db: Session = Depends(get_db),
    note_id: int
):
    """
    Delete a note.
    """
    note = note_service.get_note(db=db, note_id=note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    note_service.delete_note(db=db, note_id=note_id)
    return {"ok": True} 