document.getElementById('submit').addEventListener('click',verifyInput);

function verifyInput(e){
  const firstName=document.getElementById('firstName').value;
  const lastName=document.getElementById('lastName').value;
  const email=document.getElementById('email').value;
  const country=document.getElementById('country').value;
  const number=document.getElementById('number').value;
  const target=document.getElementById('target');

  let html='';

  if(!(validateName(firstName,lastName)&&validateEmail(email)&&validateNumber(number))){
    html='<p class="text-danger">Invalid input fields</p>';
    console.log('error');
  } else{
    html='<p class="text-success">No error</p>';
    console.log('no error');
  }
  target.innerHTML=html;

  e.preventDefault();
}

function validateName(firstName, lastName){
  const re=/^[a-zA-Z]{0,}$/;
  if(!re.test(firstName)){
    console.log('firstName');
    return false;
  } else if(!re.test(lastName)){
    console.log('lastName');
    return false;
  } else{
    return true;
  }
}

function validateEmail(email){
  const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email)){
    console.log('email');
    return false;
  } else{
    return true;
  }
}

function validateNumber(number){
  const re=/^[0-9]{10}$/;
  if(!re.test(number)){
    console.log(number);
    return false;
  } else{
    return true;
  }
}