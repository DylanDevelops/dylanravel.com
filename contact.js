document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitBtn');
    const contactForm = document.getElementById('contactForm');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name !== '' && email !== '' && message !== '') {
            let recaptchaResponse = grecaptcha.getResponse();

            if (recaptchaResponse !== '') {
                contactForm.submit();
            } else {
                alert('Please complete the reCAPTCHA before submitting again.');
            }
        } else {
            alert('Please fill out all fields before submitting again.');
        }
    });
});