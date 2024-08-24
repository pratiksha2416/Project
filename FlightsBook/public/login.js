document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(loginForm);

            
            const data = {
                username: formData.get('username'),
                password: formData.get('password')
            };

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    const result = await response.json();
                    alert('Login successful: ');
                    window.location.href = 'home.htm';

                } else {
                    const errorText = await response.text();
                    alert('Error logging in: ' + errorText);
                }
            } 
            catch (error) {
                console.error('Network error:', error);
                alert('Network error: ' + error.message);
            }
        });
    }
});

