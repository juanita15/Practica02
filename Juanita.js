document.getElementById('clickButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
});