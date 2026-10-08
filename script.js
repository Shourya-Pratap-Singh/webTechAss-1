/*
  script.js – Personal Website: Shourya Pratap Singh
  Multi-page version

  jQuery is used for:
    1. Mobile hamburger menu toggle
    2. Contact form validation
    3. Console welcome message
*/

$(document).ready(function () {

  /* =============================================
     1. WELCOME MESSAGE
     ============================================= */
  console.log("Welcome to Shourya Pratap Singh's Portfolio Website!");


  /* =============================================
     2. MOBILE HAMBURGER MENU toggle
     ============================================= */
  $("#hamburger").on("click", function () {
    $("#mobileMenu").slideToggle(250);
  });

  // Close mobile menu when a link is clicked
  $("#mobileMenu a").on("click", function () {
    $("#mobileMenu").slideUp(200);
  });


  /* =============================================
     3. CONTACT FORM VALIDATION
        (runs only on contact.html)
     ============================================= */
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();  // prevent page reload

    var name    = $.trim($("#name").val());
    var email   = $.trim($("#email").val());
    var message = $.trim($("#message").val());

    // Clear previous error
    $("#formError").text("");

    // Check: name not empty
    if (name === "") {
      $("#formError").text("Please enter your name.");
      $("#name").focus();
      return;
    }

    // Check: email not empty
    if (email === "") {
      $("#formError").text("Please enter your email address.");
      $("#email").focus();
      return;
    }

    // Check: valid email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $("#formError").text("Please enter a valid email address.");
      $("#email").focus();
      return;
    }

    // Check: message not empty
    if (message === "") {
      $("#formError").text("Please enter a message.");
      $("#message").focus();
      return;
    }

    // All valid – hide form, show success message
    $("#contactForm").fadeOut(300, function () {
      $("#successMsg").fadeIn(400);
    });

    // Reset form fields
    this.reset();
  });

});
