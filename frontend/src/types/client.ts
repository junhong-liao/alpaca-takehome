export interface Address {
  street_name: string;
  city: string;
  state: string;
  zip_code: string;
}

export interface Availability {
  day_of_the_week: number;
  start_time: string;
  end_time: string;
}

export interface Client {
  id: string;
  name: string;
  address: Address;
  availabilities: Availability[];
} 