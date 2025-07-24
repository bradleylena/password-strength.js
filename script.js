// let password = "pass123";
// if (password.length >= 8) {
//   console.log("strong password");
// } else if (password.length >= 5 && password.length <= 7) {
//   console.log("moderate password");
// } else {
//   console.log("Weak password");
// }

let password = document.getElementById("password").value;
let result = document.getElementById("result");

function passfunc() {
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");
  result.style.width = "300px";
  result.style.textAlign = "center";

  if (password.length >= 6) {
    result.textContent = "strong password";
    result.style.color = "white";
    result.style.backgroundColor = "green";
  } else if (password.length >= 4 && password.length < 6) {
    result.textContent = "medium password";
    result.style.backgroundColor = "orange";
  } else if (password.length < 4) {
    result.textContent = "weak password";
    result.style.backgroundColor = "red";
  }
}
