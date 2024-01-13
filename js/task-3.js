const ourInput = document.querySelector('#name-input');
const ourOutput = document.querySelector('#name-output');

ourInput.addEventListener('input', greeting);

function greeting() {
    const name = ourInput.value.trim();
    if(name !== '') {
        ourOutput.textContent = name;
    }else {
        ourOutput.textContent = 'Anonymous';
    };
}