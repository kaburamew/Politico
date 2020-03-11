function unhide() {
  var form = document.getElementById("login-form");
  if (form.style.display === "none") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}
