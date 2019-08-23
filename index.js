window.onload = function() {
    document.addEventListener('keydown', function(event) {
        event.code === 'Enter' ? alert('Bravo!') : alert('Sorry, try again ..');
    });
};