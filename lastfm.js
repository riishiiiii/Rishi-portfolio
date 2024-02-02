document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "4b197f8df2267128e8fca83a9087d1b3"; // Replace with your actual Last.fm API key
  const username = "riishiiiii"; // Replace with your Last.fm username
  const tracksContainer = document.getElementById("tracks-container");

  fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=7`)
    .then(response => response.json())
    .then(data => {
      data.recenttracks.track.slice(0, 10).forEach(track => {
        const artist = track.artist["#text"];
        const trackName = track.name;
        const imageUrl = track.image[2]["#text"]; // Use the medium-sized image

        const trackCard = document.createElement("div");
        trackCard.classList.add("col");

        trackCard.innerHTML = `
        <div class="card">
          <img src="${imageUrl}" class="card-img-top" alt="${trackName} - ${artist}">
          <div class="card-body" style="max-height: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            <h5 class="card-title">${trackName}</h5>
            <p class="card-text">${artist}</p>
          </div>
        </div>
      `;

        tracksContainer.appendChild(trackCard);
      });
    })
    .catch(error => console.error("Error fetching recent tracks:", error));
});
