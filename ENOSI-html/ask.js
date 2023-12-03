var map = L.map('map').setView([51.505, -0.09], 13); // Set initial map view to a default location

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    function searchPlumbers() {
      var locationInput = document.getElementById('locationInput').value;
      
      // Simulating geocoding API call (replace with actual geocoding service)
      var latitude = Math.random() * 180 - 90; // Mock latitude
      var longitude = Math.random() * 360 - 180; // Mock longitude

      fetchPlumbers(latitude, longitude);
    }

    function fetchPlumbers(latitude, longitude) {
      // Simulated data - replace with backend logic to fetch real plumber data
      var plumbersData = [
        { name: 'Plumber 1', latitude: latitude + 0.01, longitude: longitude + 0.01 },
        { name: 'Plumber 2', latitude: latitude - 0.01, longitude: longitude - 0.01 }
      ];

      showPlumbersOnMap(plumbersData);
    }

    function showPlumbersOnMap(plumbersData) {
      // Clear existing markers
      map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Add markers for plumbers' locations
      plumbersData.forEach(function(plumber) {
        var marker = L.marker([plumber.latitude, plumber.longitude]).addTo(map);
        var profileLink = '<a href="profil.html">View Profile</a>';
        marker.bindPopup('<b>' + plumber.name + '</b><br>' + profileLink).openPopup();
      });
    }
      var searchInput = document.getElementsByClassName('search-input')[0];
    var searchButton = document.getElementsByClassName('search-button')[0];

    // Attach event listeners
    searchInput.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        searchPlumbers();
      }
    });

    searchButton.addEventListener('click', function() {
      searchPlumbers();
    });

  const locationInput = document.getElementById('locationInput');

locationInput.addEventListener('focus', function() {
  this.style.outline = 'none'; // Remove default focus outline
  this.style.borderColor = 'orange'; // Change border color to orange
  this.style.boxShadow = '0 0 5px orange'; // Add a subtle box-shadow
});

locationInput.addEventListener('blur', function() {
  this.style.borderColor = 'orange'; // Reset border color on blur
  this.style.boxShadow = 'none'; // Remove box-shadow on blur
});
