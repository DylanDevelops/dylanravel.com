document.addEventListener('DOMContentLoaded', function() {
    // get the modal
    const modal = document.getElementById("modal-popout");
    const closeButton = document.getElementById("modal-close-button");
    const projectImages = document.querySelectorAll(".project-image");
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption');

    projectImages.forEach(image => {
        image.addEventListener('click', clickModalPopout)
    });

    function clickModalPopout(img) {
        // get the clicked image
        const clickedImage = img.target;

        // grab data on the image
        modalImage.src = clickedImage.src;
        caption.textContent = clickedImage.alt;

        modal.style.display = "block";
    }

    // make an event listener that listens for the user to click the escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
    
    // modal close button listener
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });
});