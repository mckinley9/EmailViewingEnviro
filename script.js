const emails = [
    {
        id: 1,
        subject: "Meeting Tomorrow",
        sender: "john@example.com",
        body: "Hi team,\n\nJust a reminder that we have a meeting scheduled for tomorrow at 10 AM. Please come prepared with your project updates.\n\nBest regards,\nJohn"
    },
    {
        id: 2,
        subject: "New Project Proposal",
        sender: "sarah@example.com",
        body: "Hello everyone,\n\nI've attached the new project proposal for your review. Please provide your feedback by Friday.\n\nThanks,\nSarah"
    },
    {
        id: 3,
        subject: "Holiday Party Announcement",
        sender: "hr@example.com",
        body: "Dear all,\n\nWe're excited to announce that this year's holiday party will be held on December 15th at the Grand Hotel. More details to follow soon!\n\nBest,\nHR Team"
    }
];

const emailList = document.getElementById('emailList');
const emailContent = document.getElementById('emailContent');

function displayEmails() {
    emails.forEach(email => {
        const emailItem = document.createElement('div');
        emailItem.className = 'email-item';
        emailItem.innerHTML = `
            <div class="email-item-subject">${email.subject}</div>
            <div class="email-item-preview">${email.sender} - ${email.body.substring(0, 50)}...</div>
        `;
        emailItem.addEventListener('click', () => {
            document.querySelectorAll('.email-item').forEach(item => item.classList.remove('active'));
            emailItem.classList.add('active');
            displayEmailContent(email);
        });
        emailList.appendChild(emailItem);
    });
}

function displayEmailContent(email) {
    const emailHeader = document.getElementById('emailHeader');
    const emailBody = document.getElementById('emailBody');

    emailHeader.innerHTML = `
        <div class="email-subject">${email.subject}</div>
        <div class="email-sender">From: ${email.sender}</div>
    `;
    emailBody.innerHTML = `${email.body.replace(/\n/g, '<br>')}`;
}
displayEmails();
