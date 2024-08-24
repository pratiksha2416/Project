document.addEventListener('DOMContentLoaded', function() {
    const resultsDiv = document.getElementById('results');
    const searchResults = JSON.parse(localStorage.getItem('searchResults'));

    if (!searchResults || searchResults.length === 0) {
        resultsDiv.innerHTML = '<p>No flights found.</p>';
        return;
    }

    searchResults.forEach(flight => {
        const flightDiv = document.createElement('div');
        flightDiv.classList.add('flight');
        flightDiv.innerHTML = `
            <p>Flight Number: ${flight.flightNumber}</p>
            <p>Departure: ${flight.departure}</p>
            <p>Destination: ${flight.destination}</p>
        `;
        resultsDiv.appendChild(flightDiv);
    });
});
