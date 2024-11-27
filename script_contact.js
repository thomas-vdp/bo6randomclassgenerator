document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const data = new FormData(form);

    // Send the form data using Fetch API
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(async (response) => {
        const responseData = await response.json();
        console.log('Response status:', response.status);
        console.log('Response data:', responseData);
        if (response.ok) {
            // Reset the form
            form.reset();
            // Redirect to thank you page
            window.location.href = 'thankyou.html';
        } else {
            // Handle errors
            if (responseData.errors) {
                alert('Oops! There was a problem submitting your form:\n' + responseData.errors.map(error => error.message).join("\n"));
            } else {
                alert('Oops! There was some problem submitting your form.');
            }
        }
    }).catch(error => {
        // Handle network errors
        console.error('Network error:', error);
        alert('Oops! There was a network problem submitting your form.');
    });
});