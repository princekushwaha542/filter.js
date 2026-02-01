function login(username) {
  localStorage.setItem("user", username);
}

function logout() {
  localStorage.removeItem("user");
}

function checkLogin() {
  if (localStorage.getItem("user")) {
    console.log("Logged In");
  } else {
    console.log("Logged Out");
  }
}

login("Prince");
checkLogin();
