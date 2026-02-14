# Nearby Restaurants Finder

This project is a simple web application that allows users to find restaurants near their current location using the OpenStreetMap Overpass API. The app displays restaurant details in a responsive grid layout with a clean and visually appealing design.

## Features

- Detects user’s current location using the browser's Geolocation API.
- Fetches nearby restaurants within a 1.5 km radius.
- Displays restaurant details including:
  - Name
  - Cuisine type
  - Address (street and city)
  - Phone number
  - Website link (if available)
- Responsive layout:
  - 3-column grid on large screens
  - 2-column grid on medium screens
  - 1-column layout on small screens
- Hover effects for restaurant cards and buttons for better interactivity.

## Technologies Used

- **HTML5** – Structure of the webpage.
- **CSS3** – Styling and responsive design.
- **JavaScript (ES6)** – Geolocation, API fetch, and dynamic DOM rendering.
- **OpenStreetMap Overpass API** – To fetch restaurant data.

## Folder Structure

project-root/
│
├─ index.html # Main HTML page
├─ css/
│ └─ style.css # Styles for the webpage
├─ js/
│ └─ script.js # JavaScript functionality for fetching and displaying restaurants

## How to Use

1. Open `index.html` in a web browser.
2. Click the **"Find Nearby Restaurants"** button.
3. Allow location access when prompted.
4. Nearby restaurants will be displayed in a card format with all available details.

## Notes

- If the browser does not support geolocation or the user denies location access, an alert will be shown.
- Restaurants without certain details (like name, cuisine, or website) will display default placeholders.
- Designed with a color palette for a soft, visually appealing look and responsive design for all screen sizes.
