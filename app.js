const loginForm = document.getElementById("login-form");
// == const loginForm = document.querySelector("#login-form");
// fint form in html
// loginform이란 form에서 input과 button 찾음
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

// == 아래의 코드는 위와 같음
// const loginInput = loginForm.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("#login-form button");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + username;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// function handleLinkClick(event){
//   event.preventDefault();
//   console.log(event);
// }

// addEventListener 안에 있는 함수는 직접 실행하지 않음 (우리X 브라우저O)
loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else{
  // show the greetings
  paintGreetings(savedUsername);
}