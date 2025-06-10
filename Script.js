let Name = document.getElementById("name")
let EMail = document.getElementById("email")
let pass = document.getElementById("password")
let Cpass = document.getElementById("Confirmpassword")
let Sign_in = document.getElementById('Sign-in');

Sign_in.addEventListener('click', () => {
    let valid_name = /^[a-zA-Z\d\s]+$/.test(Name.value);
    let valid_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EMail.value);
    let valid_pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pass.value);
    if (Name.value === "" || EMail.value === "" || pass.value === "" || Cpass.value === "") {
        alert("Please fill in all fields.");
    } else if (!valid_name) {
        alert("Please enter a valid name.");
    } else if (!valid_email) {
        alert("Please enter a valid email address.");
    } else if (!valid_pass) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
    } else {
        if (pass.value !== Cpass.value) {
            alert("Passwords do not match.");
        } else {
            alert("Registration successful!");
        }
    }
    Name.value = "";
    EMail.value = "";
    pass.value = "";
    Cpass.value = "";
    Name.focus();
});

// Gorilla sound on hover (run immediately, not inside DOMContentLoaded)
const gorillaLogo = document.getElementById('gorilla-logo');
const gorillaSound = document.getElementById('gorilla-sound');
if (gorillaLogo && gorillaSound) {
  gorillaLogo.addEventListener('mouseenter', () => {
    gorillaSound.currentTime = 0;
    gorillaSound.play().catch(() => {
      // If autoplay is blocked, do nothing
    });
  });
  gorillaLogo.addEventListener('mouseleave', () => {
    gorillaSound.pause();
    gorillaSound.currentTime = 0;
  });
}
