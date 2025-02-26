// alert()
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('hello')
    const accountNumber= document.getElementById('account-number').value;
    // console.log(accountNumber)

    const pin = document.getElementById('pin').value;
    // console.log(typeof pin)
    // console.log(accountNumber, pin)

    if(accountNumber.length===11){
        if(pin==='1234'){
            // main.html file e niye jabe
            window.location.href= "./main.html"
            // console.log('All Okay')
        }
        else{
            alert('pin is not correct')
        }

    }
    else{
        alert('invalid account number')
    }
})