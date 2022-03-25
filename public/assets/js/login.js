
const loginForm=document.querySelector('#logForm');
loginForm.addEventListener('click',async (e)=>{
    e.preventDefault();
    const email=document.getElementById('logEmailId').value;
    const password=document.getElementById('logPasswordId').value;
    if(email.length==0){
        // document.querySelector('.error-email').innerHTML="please enter a valid email adress";
        alert("please enter an existing email")
    }else if(password.length==0){
        // document.querySelector('.error-password').innerHTML="please enter a password";
        alert("please enter a correct password")
    }else{
    
        
    }    

    const credentials = {
      email :email,
      password : password,
      
      // loggedIn: false,
      
   }
  const response = await fetch("https://kalimbacapstone.herokuapp.com/user/login", {
  method: "POST",
 headers: { "Content-Type": "application/json" },
body: JSON.stringify(credentials),
  
});


const data = await response.json();

let token;


let role 


if (response.status == 200) {
  token = data.token;
  role = data.user.roles;
  localStorage.setItem('token',"Bearer " + token);
  localStorage.setItem('role', role);
  console.log("logged in succesfully");

if(role == "admin"){
  window.location.href='../newdashboard/adminpage.html'
}else{
  location.href = './blog.html'
}

  console.log(data.user);
}


});


