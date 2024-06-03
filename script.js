// U78784426
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

// Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('eventDate').value;
    const mealPreferences = document.querySelectorAll('input[name="mealPreference"]:checked');
    
    if (!name || !email || !eventDate || mealPreferences.length === 0) {
        alert('Please fill out all fields and select at least one meal preference.');
        return;}

// Collect meal preferences
    let selectedPreferences = [];
    mealPreferences.forEach(pref => {
        selectedPreferences.push(pref.value);});

// Display registration details
    const detailsDiv = document.getElementById('registrationDetails');
    detailsDiv.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Meal Preferences:</strong> ${selectedPreferences.join(', ')}</p>
    `;});