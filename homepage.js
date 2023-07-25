document.addEventListener('DOMContentLoaded', function() {

    // Get the profile picture element
    const profilePic = document.getElementById('profile-pic');

    // Function to handle the animation end event
    function onAnimationEnd(event) {
        profilePic.classList.remove('spinning', 'zooming', 'bouncing');
        profilePic.removeEventListener('animationend', onAnimationEnd);
    }

    // Function to toggle between the spinning, zooming, and bouncing animations randomly
    function toggleRandomEffect() {
        if (!profilePic.classList.contains('spinning') && !profilePic.classList.contains('zooming') && !profilePic.classList.contains('bouncing')) {
            // Generate a random number (0, 1, or 2) to determine which animation to play
            const randomEffect = Math.floor(Math.random() * 3);
            
            if (randomEffect === 0) {
                profilePic.classList.add('spinning');
            } else if (randomEffect === 1) {
                profilePic.classList.add('zooming');
            } else {
                profilePic.classList.add('bouncing');
            }
            
            // Add animationend event listener to reset the animation state
            profilePic.addEventListener('animationend', onAnimationEnd);
        }
    }

    // Event listener to trigger the spinning, zooming, and bouncing animations on click
    profilePic.addEventListener('click', toggleRandomEffect);

});