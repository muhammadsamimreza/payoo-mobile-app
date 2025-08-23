//Function of---->>> Get value of Number from user input data ///
function getValueInNumber(id) {
  const valueInNumber = parseInt(document.getElementById(id).value);
  return valueInNumber;
}

//Function of---->>> Get just value from user input data ///
function getJustValue(id) {
  const justValue = document.getElementById(id).value;
  return justValue;
}
//Function of---->>> Get just value from user input data ///
function getInnerTextInNumber(id) {
  const InnerTextInNumber = parseInt(document.getElementById(id).innerText);
  return InnerTextInNumber;
}

// Function of ----->>>> Toggle Button ////
function toggleButton(id) {
  const commonClassNameItems =
    document.getElementsByClassName("interface-form");
  for (const item of commonClassNameItems) {
    item.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

document
  .getElementById("add-money-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bankName = getJustValue("bankName");
    const accountNumberBtn = getValueInNumber("account-number-btn");
    const addAmountInputBtn = getValueInNumber("add-money-input-field");
    const addPinBtn = getValueInNumber("pin-number-btn");

    // Add Money submit Btn

    const availableBalance = getInnerTextInNumber("availableBalance");
    const totalCurrentBalance = availableBalance + addAmountInputBtn;
    document.getElementById("availableBalance").innerText = totalCurrentBalance;
    document.getElementById("add-money-input-field").value = "";
  });

// Add Money feature Button with Toggle ////

document
  .getElementById("add-money-feature-button")
  .addEventListener("click", function () {
    toggleButton("add-money-feature-section");
  });

//   Cash Out Toggle //
document
  .getElementById("cash-out-feature-button")
  .addEventListener("click", function () {
    toggleButton("cash-out-feature-section");
  });

// Cash Out Section //

document
  .getElementById("cash-out-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const inputBalanceCatch = parseInt(
      document.getElementById("cash-out-input-field").value
    );

    const crrentBalance = parseInt(
      document.getElementById("availableBalance").innerText
    );

    const afterCashOutBalance = crrentBalance - inputBalanceCatch;

    document.getElementById("availableBalance").innerText = afterCashOutBalance;

    document.getElementById("cash-out-input-field").value = "";
  });

// Transfer Section and Send Now Button ///

document
  .getElementById("transfer-submit-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const currentBalanceStill = parseInt(
      document.getElementById("availableBalance").innerText
    );

    const transferAmountInputField = parseInt(
      document.getElementById("transfer-amount-input-field").value
    );

    const afterTransferBalance = currentBalanceStill - transferAmountInputField;

    document.getElementById("availableBalance").innerText =
      afterTransferBalance;

    document.getElementById("transfer-amount-input-field").value = "";
  });

// Toggle and Show Transfer feature ///

document
  .getElementById("trasfer-money-freature-page")
  .addEventListener("click", function () {
    toggleButton("transfer-money-feature-section");
  });

// Get Bonus site Toggle ///

document
  .getElementById("get-bonus-feature-site")
  .addEventListener("click", function () {
   toggleButton("get-bonus-feature-section");
  });

// Pay Bill site Toggle ///

document
  .getElementById("pay-bill-feature-site")
  .addEventListener("click", function () {
  toggleButton("pay-bill-feature-section");
  });
// Transaction History site Toggle ///

document
  .getElementById("transaction-history-feature-site")
  .addEventListener("click", function () {
    toggleButton("transaction-history-feature-section");
  });
