
function validateLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(email === 'williamz@gmail.com' && password === '23456789') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Incorrect email or password.');
  }
}
