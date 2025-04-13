from sqlalchemy import Column, Integer, String, ForeignKey, Time
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Client(Base):
    __tablename__ = "clients"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    
    # Relationships
    address_id = Column(Integer, ForeignKey("addresses.id"))
    address = relationship("Address", back_populates="client")
    availabilities = relationship("Availability", back_populates="client")
    sessions = relationship("Session", back_populates="client")

class Address(Base):
    __tablename__ = "addresses"

    id = Column(Integer, primary_key=True, index=True)
    street_name = Column(String)
    city = Column(String, index=True)
    state = Column(String)
    zip_code = Column(String)

    # Relationships
    client = relationship("Client", back_populates="address", uselist=False)

class Availability(Base):
    __tablename__ = "availabilities"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(String, ForeignKey("clients.id"))
    day_of_the_week = Column(Integer)  # 1-7 for Monday-Sunday
    start_time = Column(Time)
    end_time = Column(Time)

    # Relationships
    client = relationship("Client", back_populates="availabilities") 