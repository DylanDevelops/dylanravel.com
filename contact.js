document.addEventListener('DOMContentLoaded', () => {

    const recaptchaElement = document.querySelector('.g-recaptcha');

    function updateRecaptchaSize() {
        if(window.innerWidth <= 530) {
            recaptchaElement.setAttribute('data-size','compact');
        } else {
            recaptchaElement.setAttribute('data-size','normal');
        }
    }

    // calling the function on page load
    updateRecaptchaSize();

    const submitButton = document.getElementById('submitBtn');
    const contactForm = document.getElementById('contactForm');

    // check if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // define the event type based on the device type
    const eventType = isMobile ? 'touchstart' : 'click';

    submitButton.addEventListener(eventType, function(event) {
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