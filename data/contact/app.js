document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from input fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Validation flags
    var isValid = true;
    var validationMessages = [];

    // Validate the name field
    if (!name.trim()) {
        validationMessages.push('Please enter your name.');
        isValid = false;
    }

    // Validate the email field
    if (!validateEmail(email)) {
        validationMessages.push('Please enter a valid email address.');
        isValid = false;
    }

    // Validate the subject field
    if (!subject.trim()) {
        validationMessages.push('Please enter a subject.');
        isValid = false;
    }

    // Validate the message field
    if (!message.trim()) {
        validationMessages.push('Please enter your message.');
        isValid = false;
    }

    // Check all validations
    if (!isValid) {
        alert(validationMessages.join('\n'));
        return;
    }
    const dataForm =  { name, email, subject, message }
    // If everything is valid
    console.log('Form Submitted',dataForm);
    localStorage.setItem('contactForm', JSON.stringify(dataForm));
    alert('Form submitted successfully!');
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


