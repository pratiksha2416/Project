document.getElementById('flightSearchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;

    fetch('/searchFlights', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ departure, destination })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Search Results:', data); // Log the search results
        localStorage.setItem('searchResults', JSON.stringify(data)); // Save results to local storage
        window.location.href = 'show.htm'; // Redirect to results page
    })
    .catch(error => {
        console.error('Error fetching flights:', error);
    });
});
