import { getFlightByNumber } from "./api.js";
import { flightCard } from "../components/flightCard.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("flight-input");
const resultsDiv = document.getElementById("results");
const loader = document.getElementById("loader");

// Main search handler
searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const flightNumber = searchInput.value.trim();
    if (!flightNumber) {
        alert("Please enter a flight number.");
        return;
    }

    loader.classList.add("active"); // show loader

    try {
        const flightData = await getFlightByNumber(flightNumber);

        if (flightData && flightData.length > 0) {
            resultsDiv.innerHTML = flightCard(flightData[0]);
        } else {
            resultsDiv.innerHTML = "<p>No flight found with that number.</p>";
        }
    } catch (err) {
        console.error(err);
        resultsDiv.innerHTML = "<p>Something went wrong. Try again.</p>";
    } finally {
        loader.classList.remove("active"); // hide loader
    }
});

// Suggestion buttons
document.querySelectorAll(".suggest-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        searchInput.value = btn.dataset.flight;
        searchForm.dispatchEvent(new Event("submit"));
    });
});