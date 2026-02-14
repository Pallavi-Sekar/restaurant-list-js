function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      fetchRestaurants(lat, lng);
    },
    (err) => {
      console.error(err);
      alert("Location denied");
    }
  );
}

async function fetchRestaurants(lat, lng) {
  
  const radius = 1500;

  
  const query = `
    [out:json];
    (
      node["amenity"="restaurant"](around:${radius},${lat},${lng});
      way["amenity"="restaurant"](around:${radius},${lat},${lng});
    );
    out center;
  `;
  
  const url = "https://overpass-api.de/api/interpreter";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: query,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    });

    const data = await response.json();
    displayRestaurants(data.elements);
  } catch (err) {
    console.error("Overpass error", err);
  }
}

function displayRestaurants(elements) {
  const container = document.getElementById("restaurant-list");
  container.innerHTML = "";

  if (!elements || elements.length === 0) {
    container.textContent = "No restaurants found nearby.";
    return;
  }

  elements.forEach((el) => {
    const tags = el.tags || {};
    const name = tags.name || "Unnamed restaurant";
    const cuisine = tags.cuisine || "N/A";
    const street = tags["addr:street"] || "N/A";
    const city = tags["addr:city"] || "N/A";
    const phone = tags.phone || "N/A";
    const website = tags.website ? `<a href="${tags.website}" target="_blank">Website</a>` : "N/A";

    const div = document.createElement("div");
    div.classList.add("restaurant-card");

    div.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Cuisine:</strong> ${cuisine}</p>
      <p><strong>Address:</strong> ${street}, ${city}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p>${website}</p>
    `;

    container.appendChild(div);
  });
}


