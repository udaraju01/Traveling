
const form = document.getElementById('form');
const sigup_form=document.getElementById('sigup_form');

const email = document.getElementById('email');
const password = document.getElementById('password');

const checkbox = document.getElementById('checkbox')

const confirm_password = document.getElementById('confirm_password');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const radioButtons =document.getElementById('rd1');

// const error_msgs=document.getElementById('error_msgs');
// const emailerror_msg=document.getElementById('emailerror_msg');
// const passworderror_msg=document.getElementById('passworderror_msg');


//form.addEventListener('submit', (e) => {
  // var emailreg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/;

  // if(useremail.value.trim()=="" && password.value.trim()==""){
  //   e.preventDefault();
  //   error_msgs.innerHTML="Please Enter Email & password..";
  // }  
  // else if(!useremail.value.match(emailreg)){
  //   e.preventDefault();
  //  error_msgs.inne1rHTML="Enter email is not invalid";
  // }
  // else if(password.value.length <=6){
  //   e.preventDefault()
  //   error_msgs.innerHTML="password must be grater than 6 character"
  // }

  // e.preventDefault();
  // login_validation();
  // e.preventDefault();
  // sigup_validations();
  //e.preventDefault();
  //password_validation();
  //e.preventDefault();
  // checkboxval();

//})

if(form){
  form.addEventListener('submit', (e)=>{
    
      e.preventDefault();
      login_validation();
      
    
    });
}
if(sigup_form){
  sigup_form.addEventListener('submit', (e)=>{
  
    e.preventDefault();
    sigup_validations();
    
  
  });
}

function validateEmailAndPassword(){
  var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/;
  //email validation
  if (email.value == "") {
    emailerror_msg.innerHTML = "Please Enter Email";
  }
  else if (!email.value.match(emailreg)) {
    emailerror_msg.innerHTML = "Enter email is not valid";
  }
  else {
    emailerror_msg.innerHTML = "";
  }
  //password validation
  if (password.value.trim() == "") {
    passworderror_msg.innerHTML = " please Enter  password";
  }
  else {
    passworderror_msg.innerHTML = "";
  }
}

//login validation
function login_validation() {
  validateEmailAndPassword();
  //checkbox validation
  if (!checkbox.checked) {
    check_error.innerHTML = "please agree the terms and conditions"
  }
  else {
    check_error.innerHTML = "";
  }

}

//sigup validations
function sigup_validations() {

  validateEmailAndPassword();
  //confirm password validation
  if (confirm_password.value.trim() == ""){
    confirmpassword_msg.innerHTML = " please Enter  confirm password";

  }
  else if (password.value != confirm_password.value) {
    confirmpassword_msg.innerHTML = "password does not match";
  }
  else {
    confirmpassword_msg.innerHTML = "";
  }

  //first name validation
  if (firstname.value.trim() == "") {
    firstnameerror_msg.innerHTML = "please enter first name";
  }
  else {
    firstnameerror_msg.innerHTML = "";
  }

  //secondname validation
  if (lastname.value.trim() == "") {
    lastnameerror_msg.innerHTML = "please enter last name"
  }
  else {
    lastnameerror_msg.innerHTML = "";
  }

  //radio validation
  
  if(!radioButtons.checked) {   
    radioerror_msg.innerHTML="please select Gender";
  } 
  else {  
        radioerror_msg.innerHTML="";
  }
};
















