document
  .getElementById("add-money-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bankName = document.getElementById("bankName").value;
    const accountNumberBtn = parseInt(
      document.getElementById("account-number-btn").value
    );
    const addAmountInputBtn = parseInt(
      document.getElementById("add-money-input-field").value
    );
    const addPinBtn = parseInt(document.getElementById("pin-number-btn").value);

    // Add Money submit Btn

    const availableBalance = parseInt(
      document.getElementById("availableBalance").innerText
    );

    const totalCurrentBalance = availableBalance + addAmountInputBtn;

    document.getElementById("availableBalance").innerText = totalCurrentBalance;

    document.getElementById("add-money-input-field").value = "";
  });

// Add Money feature Button with Toggle ////

document
  .getElementById("add-money-feature-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-feature-section").style.display = "none";
    document.getElementById("add-money-feature-section").style.display =
      "block";
  });

document
  .getElementById("cash-out-feature-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-feature-section").style.display = "none";
    document.getElementById("cash-out-feature-section").style.display = "block";
  });

// Cash Out Section //

document.getElementById('cash-out-submit-btn').addEventListener('click', function(e){
    e.preventDefault();
    
    const inputBalanceCatch = parseInt(document.getElementById('cash-out-input-field').value);

    const crrentBalance = parseInt(document.getElementById("availableBalance").innerText);


    const afterCashOutBalance = crrentBalance - inputBalanceCatch;
    

   document.getElementById("availableBalance").innerText = afterCashOutBalance;

   document.getElementById('cash-out-input-field').value ='';


})
