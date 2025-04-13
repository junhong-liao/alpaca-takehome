from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import time

class AddressBase(BaseModel):
    street_name: str
    city: str
    state: str = Field(max_length=2)
    zip_code: str = Field(pattern=r'^\d{5}$')

class AddressCreate(AddressBase):
    pass

class Address(AddressBase):
    id: int

    class Config:
        from_attributes = True

class AvailabilityBase(BaseModel):
    day_of_the_week: int = Field(ge=1, le=7)
    start_time: time
    end_time: time

class AvailabilityCreate(AvailabilityBase):
    pass

class Availability(AvailabilityBase):
    id: int
    client_id: str

    class Config:
        from_attributes = True

class ClientBase(BaseModel):
    name: str

class ClientCreate(ClientBase):
    id: str
    address: AddressCreate
    availabilities: List[AvailabilityCreate]

class ClientUpdate(ClientBase):
    name: Optional[str] = None
    address: Optional[AddressCreate] = None
    availabilities: Optional[List[AvailabilityCreate]] = None

class Client(ClientBase):
    id: str
    address: Address
    availabilities: List[Availability]

    class Config:
        from_attributes = True 