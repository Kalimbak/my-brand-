
const signUpForm=document.querySelector('#regForm');
signUpForm.addEventListener('click',async (e)=>{
    e.preventDefault();
    const firstName=document.getElementById('fNameId').value;
    const lastName=document.getElementById('lNameId').value;
    const email=document.getElementById('regEmailId').value;
    const password=document.getElementById('regPasswordId').value;
    const confirmpassword=document.getElementById('regConfirmPasswordId').value;


    if(firstName.length==0){
        document.querySelector('.error-firstName').innerHTML="please enter your Firstname";
    }else if(lastName.length==0){
        document.querySelector('.error-lastName').innerHTML="please enter your Lastname";
    }else if(email.length==0){
        document.querySelector('.error-email').innerHTML="please enter a valid email address";
    } else if(password.length==0){
            document.querySelector('.error-password').innerHTML="please enter a password";
        } else if(confirmpassword.length==0){
            document.querySelector('.error-password').innerHTML="wrong password";
    
    }else{
        // loginForm.submit();
        // window.location.href="adminpage.html";
        
        // console.log(login(email, password));
       
        // console.log(signUp(firstName, lastName, email,password));
        
    }    

    const credentials = {
        firstName:firstName,
        lastName: lastName,
      email :email,
      password : password,
      confirmPassword: confirmpassword,
      
      // loggedIn: false,
      
   }
  const response = await fetch("https://kalimbacapstone.herokuapp.com/user/signup", {
  method: "POST",
 headers: { "Content-Type": "application/json" },
body: JSON.stringify(credentials),
  
});

// console.log(response);
const data = await response.json();
// console.log(data);
// if (response.status == 201) {
//   console.log("signed up succesfully");
// // alert("signup successfully")
//   const token = data.token;

//   console.log(token);
// console.log(credentials, token);

//   localStorage.setItem('token',"Bearer " + token);


//   window.location.href='../pages/login.html'

  
// }else 
if(response.ok == false){
    // console.log(data.error)
    alert('email already exists');
    // swal("error",data.error,"error")
}
else{
    alert('email already exists');
    Window.alert
}


 

});
