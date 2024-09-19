document
  .getElementById("add-money-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addAmount = document.getElementById("fill-amount").value;
    const addPinNumber = document.getElementById("add-pin-number").value;
    if (addPinNumber === "1234") {
      const currentAmount = document.getElementById("current-amount").innerText;
      const newAmount = parseFloat(addAmount) + parseFloat(currentAmount);
      document.getElementById("current-amount").innerText = newAmount;
    } else {
      alert("Apnar Pin Number Vul");
    }
  });

document
  .getElementById("cash-out-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const cashOutAddAmount = document.getElementById(
      "fill-cashOut-amount"
    ).value;
    const cashOutPinNumber =
      document.getElementById("cashOut-pin-number").value;
    if (cashOutPinNumber === "1234") {
      const currentAmount = document.getElementById("current-amount").innerText;
      if (currentAmount < 0 || currentAmount < cashOutAddAmount) {
        alert("Apnar Account e Poriman Moto Taka Nai");
      } else {
        const newAmount =
          parseFloat(currentAmount) - parseFloat(cashOutAddAmount);
        if (newAmount > "0") {
          document.getElementById("current-amount").innerText = newAmount;
        } else {
          alert("Apnar Account e Poriman Moto taka nai!!!!");
        }
      }
    } else {
      alert("Apnar Pin Number Vul");
    }
  });
