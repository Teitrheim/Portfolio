function validateForm(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (nameInput.value.trim().length <= 5) {
    nameError.textContent = "Name should be more than 5 characters long";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  }

  if (subjectInput.value.trim().length <= 8) {
    subjectError.textContent = "Subject should be more than 8 characters long";
    isValid = false;
  }

  if (messageInput.value.trim().length <= 25) {
    messageError.textContent = "Message should be more than 25 characters long";
    isValid = false;
  }

  if (isValid) {
    nameError.textContent = "";
    messageError.textContent = "";
    subjectError.textContent = "";
    emailError.textContent = "";
    alert("Your message has been sent");
    document.getElementById("confirmationMessage").style.display = "block";
  }

  const namePattern = /^[A-Za-z ]+$/;
  if (!namePattern.test(nameInput.value.trim())) {
    nameError.textContent = "Name can only contain alphabets and spaces";
    isValid = false;
  }
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", validateForm);
