from datetime import time
import pytest
from fastapi import status

def test_create_client(client):
    client_data = {
        "id": "TEST001",
        "name": "Test Client",
        "address": {
            "street_name": "123 Test St",
            "city": "San Francisco",
            "state": "CA",
            "zip_code": "94109"
        },
        "availabilities": [
            {
                "day_of_the_week": 1,
                "start_time": "09:00",
                "end_time": "11:00"
            }
        ]
    }
    
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == status.HTTP_201_CREATED
    data = response.json()
    assert data["id"] == client_data["id"]
    assert data["name"] == client_data["name"]
    assert data["address"]["city"] == client_data["address"]["city"]
    assert len(data["availabilities"]) == len(client_data["availabilities"])

def test_create_duplicate_client(client):
    client_data = {
        "id": "TEST002",
        "name": "Test Client 2",
        "address": {
            "street_name": "456 Test Ave",
            "city": "Oakland",
            "state": "CA",
            "zip_code": "94610"
        },
        "availabilities": [
            {
                "day_of_the_week": 2,
                "start_time": "13:00",
                "end_time": "15:00"
            }
        ]
    }
    
    # First creation should succeed
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == status.HTTP_201_CREATED
    
    # Second creation should fail
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == status.HTTP_400_BAD_REQUEST

def test_get_client(client):
    # First create a client
    client_data = {
        "id": "TEST003",
        "name": "Test Client 3",
        "address": {
            "street_name": "789 Test Blvd",
            "city": "Berkeley",
            "state": "CA",
            "zip_code": "94703"
        },
        "availabilities": [
            {
                "day_of_the_week": 3,
                "start_time": "10:00",
                "end_time": "12:00"
            }
        ]
    }
    
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == status.HTTP_201_CREATED
    
    # Then get the client
    response = client.get(f"/api/v1/clients/{client_data['id']}")
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert data["id"] == client_data["id"]
    assert data["name"] == client_data["name"]

def test_get_nonexistent_client(client):
    response = client.get("/api/v1/clients/NONEXISTENT")
    assert response.status_code == status.HTTP_404_NOT_FOUND

def test_update_client(client):
    # First create a client
    client_data = {
        "id": "TEST004",
        "name": "Test Client 4",
        "address": {
            "street_name": "101 Test Lane",
            "city": "Palo Alto",
            "state": "CA",
            "zip_code": "94301"
        },
        "availabilities": [
            {
                "day_of_the_week": 4,
                "start_time": "14:00",
                "end_time": "16:00"
            }
        ]
    }
    
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == status.HTTP_201_CREATED
    
    # Update the client
    update_data = {
        "name": "Updated Test Client 4",
        "address": {
            "street_name": "Updated Test Lane",
            "city": "Palo Alto",
            "state": "CA",
            "zip_code": "94301"
        }
    }
    
    response = client.put(f"/api/v1/clients/{client_data['id']}", json=update_data)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert data["name"] == update_data["name"]
    assert data["address"]["street_name"] == update_data["address"]["street_name"]

def test_delete_client(client):
    # First create a client
    client_data = {
        "id": "TEST005",
        "name": "Test Client 5",
        "address": {
            "street_name": "202 Test Circle",
            "city": "San Jose",
            "state": "CA",
            "zip_code": "95112"
        },
        "availabilities": [
            {
                "day_of_the_week": 5,
                "start_time": "15:00",
                "end_time": "17:00"
            }
        ]
    }
    
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == status.HTTP_201_CREATED
    
    # Delete the client
    response = client.delete(f"/api/v1/clients/{client_data['id']}")
    assert response.status_code == status.HTTP_204_NO_CONTENT
    
    # Verify client is deleted
    response = client.get(f"/api/v1/clients/{client_data['id']}")
    assert response.status_code == status.HTTP_404_NOT_FOUND 