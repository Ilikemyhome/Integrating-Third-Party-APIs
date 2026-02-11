# Integrating-Third-Party-APIs

# Flight Explorer
A simple web application that retrieves real‑time flight information using a public aviation API.

## Features
- Search flights by flight number (e.g., AA100, DL220)
- Real‑time flight status
- Clean UI with loading animation
- Suggested flights for quick testing
- Error handling for invalid or missing data

## Technologies Used
- HTML
- CSS
- JavaScript 
- Public Flight API 

## Project Structure
        /project
        │── index.html
        │── README.md
        │── /css
        │     └── styles.css
        │── /js
        │     ├── app.js
        │     ├── api.js
        │     └── components
        │           └── flightCard.js


## How to Run
- Clone the repository
- Open index.html in a browser
- Enter a flight number
- View real‑time results

## Testing
Test the app with:
- Valid flight numbers
- Invalid flight numbers
- Empty input
- Slow network 
- API errors

## Testing

The application was tested across a wide range of scenarios to ensure it behaves correctly, handles errors gracefully, and provides a smooth user experience.

### Functional Tests
- Searching for a valid flight number such as AA100 displays a full flight card with airline, route, and status information.
- Entering DL220 or UA415 returns accurate results with the loader appearing briefly before the card renders.
- Clicking a suggested flight button automatically fills the input and triggers a successful search.

### Edge Case Tests
- Submitting the form with no input triggers an alert asking the user to enter a flight number.
- Entering only spaces is treated as empty input and shows the same alert.
- Typing 0 is rejected as invalid.
- Searching for a nonexistent flight like ZZ9999 results in a message saying no flight was found.
- Entering incomplete codes such as AA or numbers only like 12345 produces the same “no flight found” message.
  
### API and Network Reliability Tests
- When the API is unavailable, the app displays an error message and hides the loader.
- On a slow network, the loader remains visible until the response arrives.
- Using an invalid API key triggers the error‑handling path and shows a friendly error message.

### UI Behavior Tests
- Clicking a suggestion button fills the input and immediately performs a search.
- Submitting the form multiple times in quick succession does not break the UI; results update normally.
- Searching for a new flight replaces the previous flight card cleanly.

### Loader Behavior Tests
- During a valid search, the loader appears while data is being fetched and disappears once results are ready.
- For invalid or nonexistent flights, the loader still appears briefly, then hides before showing the “no flight found” message.
- If an API error occurs, the loader hides and the error message is displayed.




## Write‑Up

I selected a public aviation API because it provides real time, meaningful data that users can interact with. Flight tracking is a common real‑world need, and the API documentation was clear and beginner friendly. I also Like planes and I'm facinated by those plane trackers with the maps.

The application allows users to search for any flight by number and instantly see its status, departure/arrival airports, and schedule. It includes a loader animation, suggested flights, and error handling.
Challenges:
- Understanding the API response structure
- Handling cases where flights don’t exist
- Making the loader appear/disappear correctly
- Organizing the project into clean modules

Outcome:
A polished, functional web app that demonstrates API integration, UI design, and JavaScript modularity.
