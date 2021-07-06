const loginForm = document.getElementById("login-form");
// == const loginForm = document.querySelector("#login-form");
// fint form in html
// loginform이란 form에서 input과 button 찾음
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// == 아래의 코드는 위와 같음
// const loginInput = loginForm.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("#login-form button");
function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  console.log(event);
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);