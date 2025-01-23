document.getElementById('circleBtn').addEventListener('click', function() {
    this.classList.add('clicked');  // Add 'clicked' class to trigger CSS animations
    
    // Change the background color to black
    document.body.style.backgroundColor = 'black';
    
    // Show the campfire after a slight delay (e.g., after the background expands)
    setTimeout(function() {
        document.getElementById('campfire').style.display = 'block'; // Make campfire visible
    }, 2000);  // Wait for 2 seconds before showing the campfire
});
