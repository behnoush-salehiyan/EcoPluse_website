const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.user.value);
  if (!e.target.names.value.trim()) {
    alert("input a name");
    return;
  }
  if (!e.target.user.value.trim()) {
    alert("input a user");
    return;
  }
  if (!e.target.email.value.trim()) {
    alert("input a email");
    return;
  }
  if (!e.target.Password.value.trim()) {
    alert("input a password");
    return;
  }
  const password = e.target.Password.value.trim();
  const isLengthValid = password.length >= 8 && password.length <= 12;
  const hasNumber = /\d/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  if (!isLengthValid || !hasNumber || !hasUpper) {
    alert(
      "Password must be 8-12 characters, contain a number and an uppercase letter."
    );
    return;
  }

  alert(`welcome ${e.target.names.value}`);
  const win = window.open("/EcoPluse_website/home/index.html");
});
