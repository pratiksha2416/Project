document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register');

    if (registerForm) {
        registerForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(registerForm);
            const data = {
                username: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password'),
                gender: formData.get('gender')
            };

            try {
                const response = await fetch('/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert('User registered successfully');
                    window.location.href = 'home.htm'; // Redirect on successful registration
                } else {
                    const errorText = await response.text();
                    alert('Error registering user: ' + errorText);
                }
            } catch (error) {
                console.error('Network error:', error);
                alert('Network error: ' + error.message);
            }
        });
    }
});
