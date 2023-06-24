document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var actorName = document.getElementById('actorName').value;
    document.getElementById('result').innerText = 'Checking connection for ' + actorName + '...';
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('actorName').value = '';
    document.getElementById('result').innerText = '';
    // Generate new actors and update the actor1 and actor2 spans
    document.getElementById('actor1').innerText = 'New Actor 1';
    document.getElementById('actor2').innerText = 'New Actor 2';
});
