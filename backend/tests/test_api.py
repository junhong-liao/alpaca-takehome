from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}

def test_create_and_get_client():
    # Test data
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
    
    # Create client
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == 201
    created_client = response.json()
    assert created_client["id"] == client_data["id"]
    assert created_client["name"] == client_data["name"]
    
    # Get client
    response = client.get(f"/api/v1/clients/{client_data['id']}")
    assert response.status_code == 200
    assert response.json()["id"] == client_data["id"]

def test_create_and_get_session():
    # First create a client
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
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == 201
    
    # Create session
    session_data = {
        "client_id": "TEST002",
        "start_time": "2024-04-15T13:00:00",
        "end_time": "2024-04-15T15:00:00",
        "location": "Client Home",
        "goals_worked_on": "Communication skills",
        "materials_used": "Picture cards"
    }
    response = client.post("/api/v1/sessions/", json=session_data)
    assert response.status_code == 201
    created_session = response.json()
    assert created_session["client_id"] == session_data["client_id"]
    
    # Get session
    session_id = created_session["id"]
    response = client.get(f"/api/v1/sessions/{session_id}")
    assert response.status_code == 200
    assert response.json()["client_id"] == session_data["client_id"]

def test_invalid_client_data():
    # Test invalid zip code
    client_data = {
        "id": "TEST003",
        "name": "Test Client",
        "address": {
            "street_name": "123 Test St",
            "city": "San Francisco",
            "state": "CA",
            "zip_code": "941"  # Invalid zip code
        },
        "availabilities": []
    }
    response = client.post("/api/v1/clients/", json=client_data)
    assert response.status_code == 422  # Validation error

def test_invalid_session_time():
    session_data = {
        "client_id": "TEST002",
        "start_time": "2024-04-15T15:00:00",
        "end_time": "2024-04-15T14:00:00",  # End time before start time
        "location": "Client Home"
    }
    response = client.post("/api/v1/sessions/", json=session_data)
    assert response.status_code == 400  # Bad request 