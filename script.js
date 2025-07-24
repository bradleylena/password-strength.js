let password = "pass123";
if (password.length >= 8) {
  console.log("strong password");
} else if (password.length >= 5 && password.length <= 7) {
  console.log("moderate password");
} else {
  console.log("Weak password");
}
