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
    document.getElementById('transfer-money-feature-section').style.display = "none";
    document.getElementById('get-bonus-feature-section').style.display = "none";
    document.getElementById('pay-bill-feature-section').style.display = "none"
    document.getElementById("add-money-feature-section").style.display = "block";
  });


//   Cash Out Toggle //
document
  .getElementById("cash-out-feature-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-feature-section").style.display = "none";
    document.getElementById('transfer-money-feature-section').style.display = "none";
    document.getElementById('get-bonus-feature-section').style.display = "none";
    document.getElementById('pay-bill-feature-section').style.display = "none"
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


// Transfer Section and Send Now Button ///

document.getElementById('transfer-submit-button').addEventListener('click', function(e){
    e.preventDefault();

    const currentBalanceStill = parseInt(document.getElementById("availableBalance").innerText);

    const transferAmountInputField = parseInt(document.getElementById('transfer-amount-input-field').value);

    const afterTransferBalance = currentBalanceStill - transferAmountInputField;

    document.getElementById("availableBalance").innerText = afterTransferBalance;

    document.getElementById('transfer-amount-input-field').value = '';



})

// Toggle and Show Transfer feature ///

document.getElementById('trasfer-money-freature-page').addEventListener('click', function(){
    
    document.getElementById("cash-out-feature-section").style.display = "none";
    document.getElementById("add-money-feature-section").style.display = "none";
    document.getElementById('get-bonus-feature-section').style.display = "none";
    document.getElementById('pay-bill-feature-section').style.display = "none"
    document.getElementById('transfer-money-feature-section').style.display = "block";
})


// Get Bonus site Toggle ///

document.getElementById('get-bonus-feature-site').addEventListener('click', function(){
    
    document.getElementById("cash-out-feature-section").style.display = "none";
    document.getElementById("add-money-feature-section").style.display = "none";
    document.getElementById('transfer-money-feature-section').style.display = "none";
    document.getElementById('pay-bill-feature-section').style.display = "none"
    document.getElementById('get-bonus-feature-section').style.display = "block"
})

// Pay Bill site Toggle ///

document.getElementById('pay-bill-feature-site').addEventListener('click', function(){
    
    document.getElementById("cash-out-feature-section").style.display = "none";
    document.getElementById("add-money-feature-section").style.display = "none";
    document.getElementById('transfer-money-feature-section').style.display = "none";
    document.getElementById('get-bonus-feature-section').style.display = "none"
    document.getElementById('pay-bill-feature-section').style.display = "block"
})
