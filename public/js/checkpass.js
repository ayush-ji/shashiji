var passwordField = document.querySelector('#pwd');
var passwordConfirm = document.querySelector('#pwdconf');
var singupForm = document.querySelector('#supform');

passwordField.addEventListener('input', (e) => {
    console.log(passwordField.value);
}) 

function handleSubmit() {
    if ( passwordField.value === passwordConfirm.value ) {
        singupForm.submit();
    } else {
        alert('check pass')
    }
}