// creates a card UI for a single flight
import { formatTime, StatusColor } from "../js/utils.js";

export function flightCard(flight) {

    return `
        <div class="flight-card">
            <h2>${flight.airline.name} - ${flight.flight.iata}</h2>
            <p><strong>Status: </stong>
                <span style="color: ${StatusColor(flight.flight_status)};">
                    ${flight.flight_status}
                </span>
            </p>

            <p><strong>From: </strong>${flight.departure.airport} at ${formatTime(flight.departure.scheduled)}</p>
            <p><strong>To: </strong>${flight.arrival.airport} at ${formatTime(flight.arrival.scheduled)}</p>

           </div>
    `;
}