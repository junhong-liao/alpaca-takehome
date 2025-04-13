from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_create_client():
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
    assert response.status_code == 201
    data = response.json()
    assert data["id"] == client_data["id"]
    assert data["name"] == client_data["name"]
    assert data["address"]["city"] == client_data["address"]["city"]

def test_get_clients():
    response = client.get("/api/v1/clients/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_nonexistent_client():
    response = client.get("/api/v1/clients/NONEXISTENT")
    assert response.status_code == 404 