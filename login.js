function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (role === "admin" && username === "admin" && password === "admin123") {
    window.location.href = "admin.html";
  } 
  else if (role === "staff" && username === "staff" && password === "staff123") {
    window.location.href = "staff.html";
  } 
  else {
    alert("Invalid Credentials! Try again.");
  }
}