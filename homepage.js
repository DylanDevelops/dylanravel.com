document.addEventListener('DOMContentLoaded', function() {
    // Get the profile picture element
    const profilePic = document.getElementById('profile-pic');

    // Function to handle the animation end event
    function onAnimationEnd() {
        profilePic.classList.remove('spinning', 'zooming', 'bouncing');
        profilePic.removeEventListener('animationend', onAnimationEnd);
    }

    // Function to toggle between the spinning, zooming, and bouncing animations randomly
    function toggleRandomEffect() {
        if (!profilePic.classList.contains('spinning') && !profilePic.classList.contains('zooming') && !profilePic.classList.contains('bouncing')) {
            // Generate a random number (0, 1, or 2) to determine which animation to play
            const randomEffect = Math.floor(Math.random() * 5);
            
            if (randomEffect === 0) {
                profilePic.classList.add('spinning');
            } else if (randomEffect === 1) {
                profilePic.classList.add('zooming');
            } else if(randomEffect === 2) {
                profilePic.classList.add('bouncing');
            } else if(randomEffect === 3) {
                var duration = 15 * 1000;
                var animationEnd = Date.now() + duration;
                var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
                }

                var interval = setInterval(function() {
                var timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
                }, 250);
            } else {
                // take me to a link and target _blank
                window.open('./Assets/Images/teehee.jpg', '_blank');
            }
            
            // Add animationend event listener to reset the animation state
            profilePic.addEventListener('animationend', onAnimationEnd);
        }
    }

    // Event listener to trigger the spinning, zooming, and bouncing animations on click
    profilePic.addEventListener('click', toggleRandomEffect);
});