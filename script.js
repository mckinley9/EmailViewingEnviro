function showEmail(emailId) {
    const emails = document.querySelectorAll('.email');
    emails.forEach(email => {
        email.style.display = 'none';
    });

    document.getElementById(emailId).style.display = 'block';

    const listItems = document.querySelectorAll('.sidebar li');
    listItems.forEach(item => {
        item.classList.remove('active');
    });

    const activeItem = Array.from(listItems).find(item => item.textContent.includes(emailId.charAt(emailId.length - 1)));
    activeItem.classList.add('active');
}
