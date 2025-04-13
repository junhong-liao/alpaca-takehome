"""
Drive time data for ABA clinic scheduling challenge.
This module provides functions to estimate travel times between locations.

In a real application, this would use a mapping API like Google Maps, Mapbox, etc.
For this sample, we're using a simplified approach based on zip codes and cities.
"""

from typing import Dict, Optional

# City-to-city average drive times in minutes (one-way)
CITY_DRIVE_TIMES = {
    ("San Francisco", "Oakland"): 25,
    ("San Francisco", "Berkeley"): 35,
    ("San Francisco", "Palo Alto"): 45,
    ("San Francisco", "San Jose"): 60,
    ("San Francisco", "Mountain View"): 50,
    ("San Francisco", "Fremont"): 45,
    ("San Francisco", "Sunnyvale"): 55,
    ("San Francisco", "Santa Clara"): 55,
    ("San Francisco", "San Mateo"): 25,
    ("San Francisco", "Hayward"): 35,
    ("San Francisco", "Walnut Creek"): 40,
    ("San Francisco", "Millbrae"): 20,
    ("San Francisco", "Daly City"): 15,
    ("San Francisco", "South San Francisco"): 15,
    
    ("Oakland", "Berkeley"): 15,
    ("Oakland", "Palo Alto"): 40,
    ("Oakland", "San Jose"): 45,
    ("Oakland", "Mountain View"): 40,
    ("Oakland", "Fremont"): 30,
    ("Oakland", "Sunnyvale"): 45,
    ("Oakland", "Santa Clara"): 45,
    ("Oakland", "San Mateo"): 30,
    ("Oakland", "Hayward"): 20,
    ("Oakland", "Walnut Creek"): 25,
    ("Oakland", "Millbrae"): 30,
    ("Oakland", "Daly City"): 30,
    ("Oakland", "South San Francisco"): 25,
    
    ("Berkeley", "Palo Alto"): 45,
    ("Berkeley", "San Jose"): 55,
    ("Berkeley", "Mountain View"): 50,
    ("Berkeley", "Fremont"): 35,
    ("Berkeley", "Sunnyvale"): 50,
    ("Berkeley", "Santa Clara"): 50,
    ("Berkeley", "San Mateo"): 35,
    ("Berkeley", "Hayward"): 25,
    ("Berkeley", "Walnut Creek"): 25,
    ("Berkeley", "Millbrae"): 35,
    ("Berkeley", "Daly City"): 35,
    ("Berkeley", "South San Francisco"): 30,
    
    ("Palo Alto", "San Jose"): 20,
    ("Palo Alto", "Mountain View"): 10,
    ("Palo Alto", "Fremont"): 20,
    ("Palo Alto", "Sunnyvale"): 15,
    ("Palo Alto", "Santa Clara"): 15,
    ("Palo Alto", "San Mateo"): 20,
    ("Palo Alto", "Hayward"): 25,
    ("Palo Alto", "Walnut Creek"): 45,
    ("Palo Alto", "Millbrae"): 25,
    ("Palo Alto", "Daly City"): 35,
    ("Palo Alto", "South San Francisco"): 30,
    
    # Add more city pairs as needed
}

# Base drive time within the same city in minutes
SAME_CITY_DRIVE_TIME = 15

def get_drive_time(origin_address: Dict, destination_address: Dict) -> int:
    """
    Get the estimated drive time in minutes between two addresses.
    
    Args:
        origin_address: The starting address dictionary
        destination_address: The destination address dictionary
        
    Returns:
        Estimated drive time in minutes
    """
    origin_city = origin_address["city"]
    destination_city = destination_address["city"]
    
    # If same city, use base drive time
    if origin_city == destination_city:
        return SAME_CITY_DRIVE_TIME
    
    # Try to find the city pair in our lookup table
    drive_time = CITY_DRIVE_TIMES.get((origin_city, destination_city))
    
    # If not found, try the reverse order
    if drive_time is None:
        drive_time = CITY_DRIVE_TIMES.get((destination_city, origin_city))
    
    # If still not found, estimate based on similar cities or use a default
    if drive_time is None:
        # Default fallback estimate - could be more sophisticated in a real app
        drive_time = 45
    
    return drive_time

def get_travel_window(drive_time: int) -> int:
    """
    Get the recommended travel window in minutes based on drive time.
    This adds a buffer to the drive time for unexpected delays.
    
    Args:
        drive_time: Estimated drive time in minutes
        
    Returns:
        Recommended travel window in minutes
    """
    # Add a 10-minute buffer for short trips, 15 for medium, 20 for long
    if drive_time <= 20:
        buffer = 10
    elif drive_time <= 40:
        buffer = 15
    else:
        buffer = 20
    
    return drive_time + buffer

if __name__ == "__main__":
    # Test the drive time functions
    sf_address = {"street_name": "123 Main St", "city": "San Francisco", "state": "CA", "zip_code": "94107"}
    oakland_address = {"street_name": "456 Broadway", "city": "Oakland", "state": "CA", "zip_code": "94612"}
    palo_alto_address = {"street_name": "789 University Ave", "city": "Palo Alto", "state": "CA", "zip_code": "94301"}
    
    # Test drive times
    sf_to_oakland = get_drive_time(sf_address, oakland_address)
    sf_to_palo_alto = get_drive_time(sf_address, palo_alto_address)
    oakland_to_palo_alto = get_drive_time(oakland_address, palo_alto_address)
    
    print(f"Drive time from San Francisco to Oakland: {sf_to_oakland} minutes")
    print(f"Drive time from San Francisco to Palo Alto: {sf_to_palo_alto} minutes")
    print(f"Drive time from Oakland to Palo Alto: {oakland_to_palo_alto} minutes")
    
    # Test travel windows
    print(f"Travel window for SF to Oakland: {get_travel_window(sf_to_oakland)} minutes")
    print(f"Travel window for SF to Palo Alto: {get_travel_window(sf_to_palo_alto)} minutes")