document.getElementById('addFlightForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const flightNumber = document.getElementById('flightNumber').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;

    fetch('/addFlightForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ flightNumber, departure, destination })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Display the response from the server
        // Optionally, clear the form fields
        document.getElementById('addFlightForm').reset();
    })
    .catch(error => {
        console.error('Error adding flight:', error);
    });
});
