window.addEventListener('DOMContentLoaded', () => {
    const jokeText = document.querySelector('.joke');

    jQuery.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dadjokes',
        headers: { 'X-Api-Key': 'NkJn71G/TN0GtboS5seTgg==0ebYg4DWFK1pd0lp' },
        contentType: 'application/json',
        success: function(result) {
            jokeText.textContent = result[0].joke;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error getting dad joke: ', jqXHR.responseText);
            jokeText.textContent = "Why don't crabs give to charity? Because they are shellfish!";
        }
    });
});