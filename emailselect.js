function showEmail(emailId) {
    const emails = document.querySelectorAll('.email');
    emails.forEach(email => {
        email.style.display = 'none';
    });

    document.getElementById(emailId).style.display = 'block';
}
