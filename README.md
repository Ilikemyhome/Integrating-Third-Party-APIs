# Integrating-Third-Party-APIs

# Flight Explorer
A simple web application that retrieves real‑time flight information using a public aviation API.

### Features
- Search flights by flight number (e.g., AA100, DL220)
- Real‑time flight status
- Clean UI with loading animation
- Suggested flights for quick testing
- Error handling for invalid or missing data

### Technologies Used
- HTML
- CSS
- JavaScript 
- Public Flight API 

### Project Structure
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


### How to Run
- Clone the repository
- Open index.html in a browser
- Enter a flight number
- View real‑time results

### Testing
Test the app with:
- Valid flight numbers
- Invalid flight numbers
- Empty input
- Slow network 
- API errors 

### Write‑Up

I selected a public aviation API because it provides real time, meaningful data that users can interact with. Flight tracking is a common real‑world need, and the API documentation was clear and beginner friendly. I also Like planes and Im facinated by those plane trackers with the maps.

The application allows users to search for any flight by number and instantly see its status, departure/arrival airports, and schedule. It includes a loader animation, suggested flights, and error handling.
Challenges:
- Understanding the API response structure
- Handling cases where flights don’t exist
- Making the loader appear/disappear correctly
- Organizing the project into clean modules

Outcome:
A polished, functional web app that demonstrates API integration, UI design, and JavaScript modularity.
