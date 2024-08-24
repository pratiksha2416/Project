document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Here you can handle the form data, e.g., send it to a server
   
    console.log('Rating:', rating);
    console.log('Comments:', comments);

    // Display thank you message
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});
