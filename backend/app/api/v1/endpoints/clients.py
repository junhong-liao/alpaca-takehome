from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas.client import Client, ClientCreate, ClientUpdate
from app.models.client import Client as ClientModel, Address as AddressModel, Availability as AvailabilityModel

router = APIRouter()

# In-memory storage for testing
clients = {}

@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_client(client: dict):
    if client["id"] in clients:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Client already exists"
        )
    clients[client["id"]] = client
    return client

@router.get("/", response_model=List[dict])
async def get_clients():
    return list(clients.values())

@router.get("/{client_id}")
async def get_client(client_id: str):
    if client_id not in clients:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client not found"
        )
    return clients[client_id]

@router.post("/", response_model=Client, status_code=status.HTTP_201_CREATED)
def create_client_db(client: ClientCreate, db: Session = Depends(get_db)):
    # Check if client already exists
    db_client = db.query(ClientModel).filter(ClientModel.id == client.id).first()
    if db_client:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Client already exists"
        )
    
    # Create address
    db_address = AddressModel(**client.address.dict())
    db.add(db_address)
    db.flush()  # Get the address ID
    
    # Create client
    db_client = ClientModel(
        id=client.id,
        name=client.name,
        address_id=db_address.id
    )
    db.add(db_client)
    
    # Create availabilities
    for availability in client.availabilities:
        db_availability = AvailabilityModel(
            **availability.dict(),
            client_id=client.id
        )
        db.add(db_availability)
    
    db.commit()
    db.refresh(db_client)
    return db_client

@router.get("/", response_model=List[Client])
def get_clients_db(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    clients = db.query(ClientModel).offset(skip).limit(limit).all()
    return clients

@router.get("/{client_id}", response_model=Client)
def get_client_db(client_id: str, db: Session = Depends(get_db)):
    client = db.query(ClientModel).filter(ClientModel.id == client_id).first()
    if not client:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client not found"
        )
    return client

@router.put("/{client_id}", response_model=Client)
def update_client(client_id: str, client_update: ClientUpdate, db: Session = Depends(get_db)):
    db_client = db.query(ClientModel).filter(ClientModel.id == client_id).first()
    if not db_client:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client not found"
        )
    
    # Update client fields
    if client_update.name:
        db_client.name = client_update.name
    
    # Update address if provided
    if client_update.address:
        for key, value in client_update.address.dict().items():
            setattr(db_client.address, key, value)
    
    # Update availabilities if provided
    if client_update.availabilities:
        # Remove existing availabilities
        db.query(AvailabilityModel).filter(AvailabilityModel.client_id == client_id).delete()
        
        # Add new availabilities
        for availability in client_update.availabilities:
            db_availability = AvailabilityModel(
                **availability.dict(),
                client_id=client_id
            )
            db.add(db_availability)
    
    db.commit()
    db.refresh(db_client)
    return db_client

@router.delete("/{client_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_client(client_id: str, db: Session = Depends(get_db)):
    db_client = db.query(ClientModel).filter(ClientModel.id == client_id).first()
    if not db_client:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client not found"
        )
    
    db.delete(db_client)
    db.commit()
    return None 