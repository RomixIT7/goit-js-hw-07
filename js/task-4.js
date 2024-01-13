const form = document.querySelector('.login-form');
form.addEventListener('submit', objectOfValues);
function objectOfValues(e) {
    e.preventDefault();
    const ourForm = e.target;
    const email = ourForm.elements.email.value.trim();
    const password = ourForm.elements.password.value.trim();
    const formValues = {
        email: email,
        password: password,
    };
    if(email === '' || password === '') {
        alert('All form fields must be filled in');
    }else {
        console.log(formValues);
    };
    form.reset();
}