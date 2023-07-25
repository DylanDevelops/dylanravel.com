function clickNavPage(pageUrl) {

    if(pageUrl == 'https://blog.dylanravel.com') {
        window.open(pageUrl, '_blank');
    } else {
        window.location.href = pageUrl;
    }
    
}

// Call the function initially and whenever the window is resized
window.addEventListener('DOMContentLoaded', adjustFontSize);
window.addEventListener('resize', adjustFontSize);