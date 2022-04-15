// $(document).ready(function() {
//   $(".menu-toggle").on("click", function() {
//     $(".nav").toggleClass("showing");
//     $(".nav ul").toggleClass("showing");
//   });

//   $(".post-wrapper").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: $(".next"),
//     prevArrow: $(".prev"),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });
// });

// ClassicEditor.create(document.querySelector("#body"), {
//   toolbar: [
//     "heading",
//     "|",
//     "bold",
//     "italic",
//     "link",
//     "bulletedList",
//     "numberedList",
//     "blockQuote"
//   ],
//   heading: {
//     options: [
//       { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
//       {
//         model: "heading1",
//         view: "h1",
//         title: "Heading 1",
//         class: "ck-heading_heading1"
//       },
//       {
//         model: "heading2",
//         view: "h2",
//         title: "Heading 2",
//         class: "ck-heading_heading2"
//       }
//     ]
//   }
// }).catch(error => {
//   console.log(error);
// });



// //  <script type="module">
// //   // Import the functions you need from the SDKs you need
// //   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
// //   // TODO: Add SDKs for Firebase products that you want to use
// //   // https://firebase.google.com/docs/web/setup#available-libraries

// //   // Your web app's Firebase configuration
// //   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// //   const firebaseConfig = {
// //     apiKey: "AIzaSyCgBqyti3giSAggKoUABN2NdLFuGsB9yoc",
// //     authDomain: "admin-2d3a6.firebaseapp.com",
// //     projectId: "admin-2d3a6",
// //     storageBucket: "admin-2d3a6.appspot.com",
// //     messagingSenderId: "814284718272",
// //     appId: "1:814284718272:web:b1db3f5b3a6bda1176ed25",
// //     measurementId: "G-VQ56MJMGJT"
// //   };

// //   // Initialize Firebase
// //   const app = initializeApp(firebaseConfig);
// //   const analytics = getAnalytics(app);
// // </script>

// const firebaseConfig = {
//   apiKey: "AIzaSyCgBqyti3giSAggKoUABN2NdLFuGsB9yoc",
//   authDomain: "admin-2d3a6.firebaseapp.com",
//   projectId: "admin-2d3a6",
//   storageBucket: "admin-2d3a6.appspot.com",
//   messagingSenderId: "814284718272",
//   appId: "1:814284718272:web:da6c07dbc4f036e476ed25",
//   measurementId: "G-5Y16GEX4YG"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// function logout() {
//   firebase.auth().signOut().then(() => {
//     // Sign-out successful.
//     location.href="/pages/login.html"
//   }).catch((error) => {
//     // An error happened.
//   });
// }
