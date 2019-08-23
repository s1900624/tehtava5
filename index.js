window.onload = function() {
    document.addEventListener('keydown', function(event) {
        event.code === 'Enter' ? alert('Bravo!') : console.log('Sorry, try again ..');
    });
};