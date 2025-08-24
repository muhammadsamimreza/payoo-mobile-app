const dataContainer = [];

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
//Function of---->>> Get just InnerText from Tag's data ///
function getInnerText(id) {
  const InnerText = document.getElementById(id).innerText;
  return InnerText;
}
//Function of---->>> Set InnerText to main Storage ///
function setInnerText(value) {
  const mainBalance = document.getElementById("availableBalance");
  mainBalance.innerText = value;
  return mainBalance;
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

// Function of ----->>>> Toggle Button for (bg, border) Changed ////
function toggleForCss(id) {
  const allBtn = document.getElementsByClassName("btnCss");

  for (const singleBtn of allBtn) {
    singleBtn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    singleBtn.classList.add("border-[#0808081a]");
  }
  document.getElementById(id).classList.remove("border-[#0808081a]");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}
// Function of acces transaction details ///

function getTransactionDetails(titleId){
  const data = {
      name: getInnerText(titleId),
      date: new Date().toLocaleTimeString(),
    };
   return dataContainer.push(data);
}
// LogOut Button//
document.getElementById("logout-btn").addEventListener('click', function(){
  alert("Are you Sure ??");
  document.location.href = "./index.html"
});
// Add Money submit Btn
document
  .getElementById("add-money-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bankName = getJustValue("bankName");
    const accountNumberBtn = getValueInNumber("account-number-btn");
    const addAmountInputBtn = getValueInNumber("add-money-input-field");
    const addPinBtn = getValueInNumber("pin-number-btn");

    const availableBalance = getInnerTextInNumber("availableBalance");
    const totalCurrentBalance = availableBalance + addAmountInputBtn;

    setInnerText(totalCurrentBalance);
   document.getElementById("add-money-input-field").value = "";
    getTransactionDetails("add-money-title");
  });

// Cash Out Section //

document
  .getElementById("cash-out-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const inputBalanceCatch = getValueInNumber("cash-out-input-field");
    const crrentBalance = getInnerTextInNumber("availableBalance");
    const afterCashOutBalance = crrentBalance - inputBalanceCatch;
   
    setInnerText(afterCashOutBalance);
    document.getElementById("cash-out-input-field").value = "";
    getTransactionDetails("cash-out-title");
  });

// Transfer Section and Send Now Button ///

document
  .getElementById("transfer-submit-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const currentBalanceStill = getInnerTextInNumber("availableBalance");
    const transferAmountInputField = getValueInNumber("transfer-amount-input-field");

    const afterTransferBalance = currentBalanceStill - transferAmountInputField;
    setInnerText(afterTransferBalance);
    document.getElementById("transfer-amount-input-field").value = "";
    getTransactionDetails("transfer-money-title")
  });

// Show  >>>** Transaction History **<<< \\

document
  .getElementById("transaction-history-feature-site")
  .addEventListener("click", function () {
    const interfaceDataContainer = document.getElementById(
      "interface-Data-Container"
    );
    interfaceDataContainer.innerText = "";
    for (const data of dataContainer) {
      const div = document.createElement("div");
      div.innerHTML = `
          <div class="w-[90%] mx-auto bg-white rounded-2xl py-5 border-2 border-gray-200 mb-3">
            <div class="">
              <div class="Transaction-Card flex justify-between items-center px-5">
               <div class="Left-site-transaction flex gap-5">
                <div class="w-14 rounded-full bg-[#f4f5f7] p-3">
                 <img class="w-14" src="./assets/wallet1.png" alt="" />
               </div>
                <div>
                  <h2 class="text-xl font-semibold text-[#080808b3]">${data.name}</h2>
                  <p class="text-[#080808b3]">${data.date}</p>
                </div>
               </div>
                <div class="dot text-2xl text-[#080808b3]">
                  <i class="cursor-pointer fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
          </div>
    `;
      interfaceDataContainer.appendChild(div);
    }
  });

// Add Money Toggle ////

document
  .getElementById("add-money-feature-button")
  .addEventListener("click", function () {
    toggleButton("add-money-feature-section");
    toggleForCss("add-money-feature-button");
  });

//   Cash Out Toggle //
document
  .getElementById("cash-out-feature-button")
  .addEventListener("click", function () {
    toggleButton("cash-out-feature-section");
    toggleForCss("cash-out-feature-button");
  });

// Toggle and Show Transfer feature ///

document
  .getElementById("trasfer-money-freature-page")
  .addEventListener("click", function () {
    toggleButton("transfer-money-feature-section");
    toggleForCss("trasfer-money-freature-page");
  });

// Get Bonus site Toggle ///

document
  .getElementById("get-bonus-feature-site")
  .addEventListener("click", function () {
    toggleButton("get-bonus-feature-section");
    toggleForCss("get-bonus-feature-site");
  });

// Pay Bill site Toggle ///

document
  .getElementById("pay-bill-feature-site")
  .addEventListener("click", function () {
    toggleButton("pay-bill-feature-section");
    toggleForCss("pay-bill-feature-site");
  });
// Transaction History site Toggle ///

document
  .getElementById("transaction-history-feature-site")
  .addEventListener("click", function () {
    toggleButton("transaction-history-feature-section");
    toggleForCss("transaction-history-feature-site");
  });
