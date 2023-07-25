function clickNavPage(pageUrl) {
    window.location.href = pageUrl;
}

// Call the function initially and whenever the window is resized
window.addEventListener('DOMContentLoaded', adjustFontSize);
window.addEventListener('resize', adjustFontSize);