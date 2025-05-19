document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();

    let hasError = false;

    //Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.querySelectorAll('input,textarea').forEach(el => el.classList.remove('border-error'));


    const firstName = document.getElementById('first-name');
        if(firstName.value.trim() === ''){
            firstName.classList.add('border-error');
            document.getElementById('firstNameError').textContent = 'This field is required';
            hasError = true;
        }else{
            firstName.classList.remove('border-error');
        }
        
    const lastName = document.getElementById('last-name');
        if(lastName.value.trim() === ''){
            lastName.classList.add('border-error');
            document.getElementById('lastNameError').textContent = 'This field is required';
            hasError = true;
        }else{
            lastName.classList.remove('border-error');
        }
    
    const email = document.getElementById('email');
        if(email.value.trim() === ''){
            email.classList.add('border-error');
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            hasError = true;
        }else{
            email.classList.remove('border-error');
        }
    
    const queryTypeChecked = document.querySelector('input[name="query__type-sq"]:checked');
        if(!queryTypeChecked){
            document.getElementById('queryTypeChecked').textContent = 'Please select a query type';
            hasError = true;
        }

    const message = document.getElementById('message');
        if(message.value.trim() === ''){
            message.classList.add('border-error');
            document.getElementById('messageError').textContent = 'This field is required';
            hasError = true;
        }else{
            message.classList.remove('border-error');
        }

    const confirm = document.getElementById('confirm');
        if(!confirm.checked){
            confirm.classList.add('border-error');
            document.getElementById('confirmError').textContent = 'To submit this form. please confirm to being contacted'
            hasError = true;
        }else{
            confirm.classList.remove('border-error');
        }
});

