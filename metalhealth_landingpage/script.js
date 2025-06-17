document.addEventListener("DOMContentLoaded", function() {
  const contactBtn = document.getElementById("contactBtn");
  
  contactBtn.addEventListener("click", function() {
    // Scroll smoothly to the contact section
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    
    // Basic demonstration alert
    alert("Thanks for reaching out! We'll be in touch shortly.");
  });
});