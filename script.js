let input = document.getElementsByTagName('input')[0];
let button = document.getElementsByTagName('button')[0];
let error = document.getElementById('error');
let emailConfirm = document.getElementById('email-confirm');
let email;
let container = document.getElementsByClassName('container')[0];
let containerSuccess = document.getElementsByClassName('container-success')[0];

button.addEventListener('click', function(){
    if(!input.value.includes('.com') || !input.value.includes('@')){
        error.innerHTML = 'Valid email required';
        error.style.color = 'hsl(4, 100%, 67%)';
        input.style.backgroundColor = 'hsl(4, 100%, 90%)';
        input.style.placeholder = 'hsl(4, 100%, 67%)';
        input.style.border = 'solid 1px hsl(4, 100%, 67%)';
        input.classList.add('placeholder-red')
    }else{
        container.style.display = 'none';
        containerSuccess.style.display = 'flex';
        email = input.value;
        emailConfirm.innerHTML = email;
    }
});

