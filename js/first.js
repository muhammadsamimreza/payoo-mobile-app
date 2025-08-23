// login button js here

document.getElementById('login-btn').addEventListener('click', function (e){
    e.preventDefault();

    const mobileNumber = 88717728774;
    const pinNumber = 1234;

    const mblNumberInput = parseInt(document.getElementById('mblNumberInput').value);
    console.log(mblNumberInput);
    const pinNumberInput = parseInt(document.getElementById('pinNumberInput').value);
    console.log(pinNumberInput);
    if( mblNumberInput === mobileNumber && pinNumberInput === pinNumber){
        document.location.href = "./home.html";
    } else{
        alert('Invaiid Credentials')
    }
})

