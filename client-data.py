"""
Sample client data for ABA clinic scheduling challenge.
This file contains a list of client objects with their availabilities and addresses.
"""

clients = [
    {
        "id": "C001",
        "name": "Alex Johnson",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "09:00", "end_time": "11:00"},
            {"day_of_the_week": 1, "start_time": "15:00", "end_time": "17:00"},
            {"day_of_the_week": 3, "start_time": "13:00", "end_time": "15:00"},
            {"day_of_the_week": 5, "start_time": "10:00", "end_time": "12:00"}
        ],
        "address": {
            "street_name": "123 Pine St",
            "city": "San Francisco",
            "state": "CA",
            "zip_code": "94109"
        }
    },
    {
        "id": "C002",
        "name": "Sam Williams",
        "availabilities": [
            {"day_of_the_week": 2, "start_time": "08:00", "end_time": "10:00"},
            {"day_of_the_week": 2, "start_time": "13:00", "end_time": "15:00"},
            {"day_of_the_week": 4, "start_time": "09:00", "end_time": "11:00"},
            {"day_of_the_week": 4, "start_time": "16:00", "end_time": "18:00"}
        ],
        "address": {
            "street_name": "456 Oak Ave",
            "city": "Oakland",
            "state": "CA",
            "zip_code": "94610"
        }
    },
    {
        "id": "C003",
        "name": "Jordan Brown",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "10:00", "end_time": "12:00"},
            {"day_of_the_week": 2, "start_time": "14:00", "end_time": "16:00"},
            {"day_of_the_week": 3, "start_time": "09:00", "end_time": "11:00"},
            {"day_of_the_week": 5, "start_time": "13:00", "end_time": "15:00"}
        ],
        "address": {
            "street_name": "789 Maple Dr",
            "city": "Berkeley",
            "state": "CA",
            "zip_code": "94703"
        }
    },
    {
        "id": "C004",
        "name": "Casey Smith",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "13:00", "end_time": "15:00"},
            {"day_of_the_week": 3, "start_time": "10:00", "end_time": "12:00"},
            {"day_of_the_week": 4, "start_time": "14:00", "end_time": "16:00"},
            {"day_of_the_week": 5, "start_time": "09:00", "end_time": "11:00"}
        ],
        "address": {
            "street_name": "321 Birch Blvd",
            "city": "Palo Alto",
            "state": "CA",
            "zip_code": "94301"
        }
    },
    {
        "id": "C005",
        "name": "Taylor Chen",
        "availabilities": [
            {"day_of_the_week": 2, "start_time": "10:00", "end_time": "12:00"},
            {"day_of_the_week": 3, "start_time": "15:00", "end_time": "17:00"},
            {"day_of_the_week": 4, "start_time": "08:00", "end_time": "10:00"},
            {"day_of_the_week": 5, "start_time": "14:00", "end_time": "16:00"}
        ],
        "address": {
            "street_name": "654 Cedar St",
            "city": "San Jose",
            "state": "CA",
            "zip_code": "95112"
        }
    },
    {
        "id": "C006",
        "name": "Riley Martinez",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "11:00", "end_time": "13:00"},
            {"day_of_the_week": 2, "start_time": "16:00", "end_time": "18:00"},
            {"day_of_the_week": 4, "start_time": "10:00", "end_time": "12:00"},
            {"day_of_the_week": 5, "start_time": "15:00", "end_time": "17:00"}
        ],
        "address": {
            "street_name": "987 Redwood Way",
            "city": "Mountain View",
            "state": "CA",
            "zip_code": "94040"
        }
    },
    {
        "id": "C007",
        "name": "Morgan Lee",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "14:00", "end_time": "16:00"},
            {"day_of_the_week": 2, "start_time": "09:00", "end_time": "11:00"},
            {"day_of_the_week": 3, "start_time": "16:00", "end_time": "18:00"},
            {"day_of_the_week": 5, "start_time": "11:00", "end_time": "13:00"}
        ],
        "address": {
            "street_name": "741 Sequoia Terrace",
            "city": "Fremont",
            "state": "CA",
            "zip_code": "94538"
        }
    },
    {
        "id": "C008",
        "name": "Avery Wilson",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "08:00", "end_time": "10:00"},
            {"day_of_the_week": 3, "start_time": "11:00", "end_time": "13:00"},
            {"day_of_the_week": 4, "start_time": "15:00", "end_time": "17:00"},
            {"day_of_the_week": 5, "start_time": "16:00", "end_time": "18:00"}
        ],
        "address": {
            "street_name": "852 Elm Court",
            "city": "Sunnyvale",
            "state": "CA",
            "zip_code": "94086"
        }
    },
    {
        "id": "C009",
        "name": "Jamie Patel",
        "availabilities": [
            {"day_of_the_week": 2, "start_time": "11:00", "end_time": "13:00"},
            {"day_of_the_week": 3, "start_time": "14:00", "end_time": "16:00"},
            {"day_of_the_week": 4, "start_time": "11:00", "end_time": "13:00"},
            {"day_of_the_week": 5, "start_time": "08:00", "end_time": "10:00"}
        ],
        "address": {
            "street_name": "963 Aspen Lane",
            "city": "Santa Clara",
            "state": "CA",
            "zip_code": "95050"
        }
    },
    {
        "id": "C010",
        "name": "Dakota Parker",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "16:00", "end_time": "18:00"},
            {"day_of_the_week": 2, "start_time": "15:00", "end_time": "17:00"},
            {"day_of_the_week": 3, "start_time": "08:00", "end_time": "10:00"},
            {"day_of_the_week": 4, "start_time": "13:00", "end_time": "15:00"}
        ],
        "address": {
            "street_name": "159 Willow Drive",
            "city": "San Mateo",
            "state": "CA",
            "zip_code": "94403"
        }
    },
    {
        "id": "C011",
        "name": "Quinn Thompson",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "09:00", "end_time": "12:00"},
            {"day_of_the_week": 3, "start_time": "13:30", "end_time": "16:30"},
            {"day_of_the_week": 5, "start_time": "10:00", "end_time": "13:00"}
        ],
        "address": {
            "street_name": "753 Poplar Street",
            "city": "Hayward",
            "state": "CA",
            "zip_code": "94541"
        }
    },
    {
        "id": "C012",
        "name": "Reese Garcia",
        "availabilities": [
            {"day_of_the_week": 2, "start_time": "09:30", "end_time": "12:30"},
            {"day_of_the_week": 4, "start_time": "14:00", "end_time": "17:00"},
            {"day_of_the_week": 5, "start_time": "08:30", "end_time": "11:30"}
        ],
        "address": {
            "street_name": "264 Juniper Avenue",
            "city": "Walnut Creek",
            "state": "CA",
            "zip_code": "94596"
        }
    },
    {
        "id": "C013",
        "name": "Drew Robinson",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "13:30", "end_time": "16:30"},
            {"day_of_the_week": 3, "start_time": "10:30", "end_time": "13:30"},
            {"day_of_the_week": 4, "start_time": "08:30", "end_time": "11:30"}
        ],
        "address": {
            "street_name": "357 Sycamore Road",
            "city": "Millbrae",
            "state": "CA",
            "zip_code": "94030"
        }
    },
    {
        "id": "C014",
        "name": "Skyler Nguyen",
        "availabilities": [
            {"day_of_the_week": 2, "start_time": "13:00", "end_time": "16:00"},
            {"day_of_the_week": 4, "start_time": "09:00", "end_time": "12:00"},
            {"day_of_the_week": 5, "start_time": "14:30", "end_time": "17:30"}
        ],
        "address": {
            "street_name": "468 Magnolia Circle",
            "city": "Daly City",
            "state": "CA",
            "zip_code": "94015"
        }
    },
    {
        "id": "C015",
        "name": "Finley Kim",
        "availabilities": [
            {"day_of_the_week": 1, "start_time": "15:30", "end_time": "18:30"},
            {"day_of_the_week": 2, "start_time": "08:00", "end_time": "11:00"},
            {"day_of_the_week": 3, "start_time": "14:00", "end_time": "17:00"}
        ],
        "address": {
            "street_name": "579 Cypress Lane",
            "city": "South San Francisco",
            "state": "CA",
            "zip_code": "94080"
        }
    }
]

if __name__ == "__main__":
    # Print some basic stats about the data
    print(f"Total number of clients: {len(clients)}")
    total_availabilities = sum(len(client["availabilities"]) for client in clients)
    print(f"Total number of availability slots: {total_availabilities}")
    print(f"Average availability slots per client: {total_availabilities / len(clients):.2f}")