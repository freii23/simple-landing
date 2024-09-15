document.addEventListener('DOMContentLoaded', function() {
    // Subscribe button to open the payment modal
    const subscribeLink = document.getElementById('subscribe-link');
    const paymentModal = document.getElementById('payment-modal');
    const closeModal = document.querySelector('.close');

    // Success modal elements
    const successModal = document.getElementById('success-modal');
    const closeSuccessModal = document.getElementById('close-success-modal');

    // Email and Submit button
    const emailInput = document.getElementById('email-input');
    const submitBtn = document.getElementById('submit-btn');

    subscribeLink.addEventListener('click', function(e) {
        e.preventDefault();
        paymentModal.style.display = 'flex';  // Open the payment modal
    });

    closeModal.addEventListener('click', function() {
        paymentModal.style.display = 'none';  // Close payment modal
    });

    // Handle email submit
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInput.value;

        if (email) {
            successModal.style.display = 'flex';  // Show success modal
        } else {
            alert("Please enter a valid email address!");
        }
    });

    // Close success modal
    closeSuccessModal.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
});

