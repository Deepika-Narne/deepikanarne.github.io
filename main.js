function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var message = document.getElementById("message").value;

    // Construct email body
    var emailBody = "Name: " + name + "\n";
    emailBody += "Email: " + email + "\n";
    emailBody += "Company: " + company + "\n";
    emailBody += "Message: " + message + "\n";

    // Send email (this is a simple example, replace with your actual email sending logic)
    alert("Email sent:\n\n" + emailBody);

    // You can also use a library like Email.js or integrate a server-side solution for actual email sending
    // See: https://www.emailjs.com/
    // Or implement a server-side script in Node.js, PHP, etc.
}
