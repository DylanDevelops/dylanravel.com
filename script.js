function clickNavPage(pageUrl) {

    if(pageUrl == 'https://blog.dylanravel.com') {
        window.open(pageUrl, '_blank');
    } else {
        window.location.href = pageUrl;
    }
    
}