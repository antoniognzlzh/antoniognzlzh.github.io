// Toggle dark/light mode and update button text
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var toggleBtn = document.querySelector('.toggle-btn');
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = "Switch to Light Mode";
    } else {
      toggleBtn.textContent = "Switch to Dark Mode";
    }
  }
  
  // Send the email using EmailJS without opening the client's email app
  function sendEmail(e) {
    e.preventDefault();
    
    // Simple form validation
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return false;
    }
    
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS details
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target)
      .then(function(response) {
         alert("Message sent successfully!");
      }, function(error) {
         alert("Failed to send message, please try again later.");
      });
    
    // Optionally reset the form
    e.target.reset();
    return false;
  }