document.getElementById('login-button').addEventListener('click', function(){
    const emilField = document.getElementById('email-field');
    const email = emilField.value;
    emilField.value = '';
     
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    passwordField.value= '';
    if(email === 'saidul@gmail.com' && password === 'saidul12345'){
        window.location.href = 'inside.html';
    }
    else{
        alert('invalid user')
    }
   
})