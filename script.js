document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(Thank you for subscribing with the email: ${email});
});