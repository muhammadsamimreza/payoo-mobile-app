document.getElementById('addMoney-btn').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = document.getElementById('bankName').value;
    const accountNumberBtn = parseInt(document.getElementById('account-number-btn').value);
    const addAmountBtn = parseInt(document.getElementById('add-amount-btn').value);
    const addPinBtn = parseInt(document.getElementById('pin-number-btn').value);

    // Add Money Btn

    const availableBalance = parseInt(document.getElementById('availableBalance').innerText)
    
    const totalCurrentBalance = availableBalance + addAmountBtn;

    document.getElementById('availableBalance').innerText = totalCurrentBalance;

   document.getElementById('add-amount-btn').value ='';
})