// This handles all the API calls to the backend server

const API_KEY = "eed8e0c71a330a8d65c3d892ddd3bf2c";
const BASE_URL = "https://api.aviationstack.com/v1/";

// Function to fetch flight data based on user input

export async function getFlightByNumber(flightNumber) {
    const url = `${BASE_URL}flights?access_key=${API_KEY}&flight_iata=${flightNumber}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data.data; // Returns the flight data array
    } catch (error) {
        console.error("Error fetching flight data:", error);
        return null;
    }
}