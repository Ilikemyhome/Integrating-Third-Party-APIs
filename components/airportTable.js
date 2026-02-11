// generates a table of airports and their details

import { formatTime } from "../js/utils.js";

export function airportTable(airports) {
    return `
        <table class="airport-table">
            <thead>
                <tr>
                    <th>Flight</th>
                    <th>Airline</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${flights.map(flight => `
                    <tr>
                        <td>${flight.flight.iata}</td>
                        <td>${flight.airline.name}</td>
                        <td>${formatTime(flight.departure.scheduled)}</td>
                        <td>${formatTime(flight.arrival.scheduled)}</td>
                        <td>${flight.flight_status}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}