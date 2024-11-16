// Add "back" navigation functionality if needed
function goBack() {
    window.history.back();
  }

  document.querySelector("form").addEventListener("submit", function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();  // Prevent form submission
        alert("Please fill in all fields.");
    }
});
