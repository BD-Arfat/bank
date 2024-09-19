document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumbmer = document.getElementById("mobile-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  if (mobileNumbmer === "01846615162" && pinNumber === "1234") {
    window.location.href = "/homePage.html";
    document.getElementById("reset-form").reset("");
  } else {
    alert("Apnar Pin Number Vul...");
  }
});
