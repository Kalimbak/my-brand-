
/* MENU SHOW Y HIDDEN */

const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/* SHOW MENU */
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* HIDE MENU */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE ON CLICK OF ICON*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ACCORDION SKILLS */

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(let i = 0; i < skillsContent.length; i++) skillsContent[i].className = 'skills__content skills__close'
    if (itemClass === 'skills__content skills__close') this.parentNode.className = 'skills__content skills__open'
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/* QUALIFICATION TABS */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/* SERVICES MODAL */

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'), 
      modalCloses = document.querySelectorAll('.services__modal-close'), 
      servicesModals = document.querySelectorAll('.services__modal'),
      servicesModalContent = document.querySelectorAll('.services__modal-content')

const modal = modalClick => {
    modalViews[modalClick].classList.add('active-modal') 
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// To be Reviewed
// servicesModals.forEach((servicesModal) => {
//     servicesModal.addEventListener('click', () => {
//         if (servicesModalContent.clicked === true) {
//             alert('You are Clicking Me')
//         }        
//         else {
//             modalViews.forEach((modalView) => {
//                 modalView.classList.remove('active-modal')
//             })
//         }
//     })
// })

// Updated Swiper JS 

/* PORTFOLIO SWIPER  */

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: false, //Allos Us To Loop Through Pagination
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

/* TESTIMONIAL */

// /* Form Control */
// const contactForm = document.getElementById('contactForm')  //.submit()

// const formSubmit = (e) => {
//     e.preventDefault()
//     checkInput()
//     alert('Your Message Has Been Sent Successfully')
// }

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* CHANGE BACKGROUND HEADER */ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// /* SHOW SCROLL UP */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


/* DARK LIGHT THEME */ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// let a;

// const messageFormData = () => {
//     const fullNames = document.getElementById('nameId').value
//     const email = document.getElementById('emailId').value
//     const project = document.getElementById('projectId').value
//     const message = document.getElementById('messageId').value

//     const messageData = {fullNames, email, project, message}
//     return messageData
// }

// const submitQuerry = document.getElementById('sendQuerry')


// const isNull = () => {
//     // console.log({ fullNames: messageFormData().fullNames, email: messageFormData().email, project: messageFormData().project, message: messageFormData().message })
//     if (messageFormData().fullNames == '') {
//         alert('Name Required')
//         a = false
//     }
//     if (messageFormData().email == '') {
//         alert('Email Required')
//         a = false
//     }
//     if (messageFormData().project == '') {
//         alert('Project Required')
//         a = false
//     }
//     if (messageFormData().message == '') {
//         alert('Message Required')
//         a = false
//     }
//     else return a = true
//     return a
//  }

// submitQuerry.addEventListener('click', (e) => {
//     e.preventDefault()
//     isNull()
//     submitQuerryForm()
// })

// const submitQuerryForm = () => {
//     if (isNull() == false) alert('Message not succefully sent')
//     else alert('Message Sent Succefully')
// }


// login form validations



// contact form 

function validateEmail(email){
    let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    
    if(!validRegex.test(email)){
        return false;
    } else {
        return true;
    }};

// function allLetter(myValue){
//     let letters = /^[A-Za-z\s]+$/;
//     if(!letters.test(myValue)) {
//         return false;
//     } else{
//         return true;
//     }
// }

// function validateRange(myValue, minLength, maxLength){
//     let myValueLength = myValue.length;
//     if(myValueLength == 0 || myValueLength < minLength || myValueLength > maxLength){
//         return false;
//     } else {
//         return true;
//     }
// }
function validation(){

    let counter = 0;
    
    
    let username = document.getElementById("nameId");
    let email = document.getElementById("emailId");
    let project = document.getElementById("projectId");
    let message = document.getElementById("messageId");

    if( username.value == "" ){
        counter ++;
        alert("Name required")
        // return false;
    }
    // else{
    //     // alert("message sent succefull")
    //     true;
    // }

    
    if(!validateEmail(email.value)){

        counter ++;
        alert("Email required")
        // return false;
    }
    // else{
    //     // alert("message sent succefull")
    //     true;
    // }
    if( project.value == "" ){
        counter ++;
        alert("Projectrequired")
        // return false;
    }
    // else{
    //     // alert("message sent succefull")
    //     true;
    // }
    if( message.value == "" ){
        counter ++;
        alert("Message required")
        // return false;
    }
    // else{
    //     // alert("message sent succefull")
    //     true;
    // }

    if(counter == 0){
        alert("all good");
    }
    
   
}

// register validation

function validateEmail(email){
    let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    
    if(!validRegex.test(email)){
        return false;
    } else {
        return true;
    }};

// function allLetter(myValue){
//     let letters = /^[A-Za-z\s]+$/;
//     if(!letters.test(myValue)) {
//         return false;
//     } else{
//         return true;
//     }
// }

// function validateRange(myValue, minLength, maxLength){
//     let myValueLength = myValue.length;
//     if(myValueLength == 0 || myValueLength < minLength || myValueLength > maxLength){
//         return false;
//     } else {
//         return true;
//     }
// }
function regValidation(){

    let counter = 0;
    
    
    let username = document.getElementById("fameId");
    let lastname = document.getElementById("lNameId");
    let email = document.getElementById("regEmailId");
    let password = document.getElementById("regPasswordId");

    if( username.value == "" ){
        counter ++;
        alert("firstname required")
        // return false;
    }
    // else{
    //     // alert("message sent succefull")
    //     true;
    // }
    if( lastname.value == "" ){
        counter ++;
        alert("lastname required")
        // return false;
    }
    // else{
    //     // alert("message sent succefull")
    //     true;
    // }
    
    if(!validateEmail(email.value)){

        counter ++;
        alert("Email required")
        // return false;
    }
    // else{
    //     // alert("message sent succefull")
    //     true;
    // }
   
    if( password.value == "" ){
        counter ++;
        alert("Message required")
        // return false;
    }
    // else{
    //     // alert("message sent succefull")
    //     true;
    // }

    if(counter == 0){
        alert("all good");
    }
    
   
}

// database configurations

  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCgBqyti3giSAggKoUABN2NdLFuGsB9yoc",
    authDomain: "admin-2d3a6.firebaseapp.com",
    projectId: "admin-2d3a6",
    storageBucket: "admin-2d3a6.appspot.com",
    messagingSenderId: "814284718272",
    appId: "1:814284718272:web:da6c07dbc4f036e476ed25",
    measurementId: "G-5Y16GEX4YG"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e)  => { 
    e.preventDefault();
    function validateEmailLogin(email){
        let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        
        if(!validRegex.test(email)){
            return false;
        } else {
            
            return true;
        }};
    
    function validate(){
        
        var username = document.getElementById("logEmailId");
        var password = document.getElementById("logPasswordId");
       
        
       
        if(username.value == " " || password.value == ""){
            alert("Login unsuccefull");
            return false;
        }
        else{
            validateEmailLogin(username.value)
    
            // alert("Login succefull")
            true;
        }
    }
    
    //  loginForm.id
    

app.auth().signInWithEmailAndPassword(loginForm.email.value, loginForm.password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user.email)
    location.href="./blog-html-css/admin/users/index.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  })
});

// console.log(loginForm)