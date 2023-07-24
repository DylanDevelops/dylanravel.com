function clickNavPage(pageUrl) {
    window.location.href = pageUrl;
}

// Function to dynamically adjust font size based on text width and height
function adjustFontSize() {
    const headings = document.querySelectorAll('.dynamic-font-size');
    headings.forEach((heading) => {
        // Reset the font size to the default value (e.g., 24px)
        heading.style.fontSize = '24px';

        // Calculate the width and height of the text
        const textWidth = heading.clientWidth;
        const textHeight = heading.clientHeight;

        // Calculate the available width and height of the container (e.g., 440px)
        const containerWidth = 440; // Adjust this value according to your container's width

        // Calculate the scaling factor for width and height
        const widthScale = containerWidth / textWidth;

        // Adjust the font size based on the smaller scaling factor
        const scaleFactor = Math.min(1, widthScale);
        heading.style.fontSize = `${scaleFactor * 24}px`; // Adjust the default font size (24px) as needed
    });
}

// Call the function initially and whenever the window is resized
window.addEventListener('DOMContentLoaded', adjustFontSize);
window.addEventListener('resize', adjustFontSize);
