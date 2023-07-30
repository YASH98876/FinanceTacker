// Database (array) to store user data
let users = [
    { username: 'yashraj', password: '12345' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];
  
  // Function to handle form submission
  function handleLogin(event) {
    event.preventDefault();
  
    // Get entered username and password
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
  
    // Check if user exists in the database
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
  
    if (user) {
      alert('Login successful!');
      // Redirect to another page or perform further actions
    } else {
      alert('Invalid username or password!');
    }
  }
  
  // Add event listener to the form submit event
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  