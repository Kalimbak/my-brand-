
// window.addEventListener('load',(e)=>{
//     var urlAddress=window.location.href;
//     if(urlAddress.includes('sitemessages.html')){
//         loadMessages();
//     }
// });

// fetch('https://kalimbacapstone.herokuapp.com/messages/').then((data) => {
//     // console.log(data);
//     return data.json();
// }).then((completeData) => {
//     // console.log(completedata[2].title);
//     let data1="";
//     completeData.forEach((values) => {
//         data1+= ` <div class="card">
//         <h1 class="name">${values.name}</h1>
//         <h2 class="email">${values.email}</h2>
//         <h2 class="message">${values.message}</h2>
//     </div> `
//     })
//     document.getElementById("cards").innerHTML=data1;
//     document.getElementById("cards").innerHTML=data1;
//     const card =document.querySelector('.card');
//     card.addEventListener('click', (e, name,email,message,id) => {
       
//     })
// }).catch((err) => {
//     console.log(err);
// })

// function loadMessages(){
//     if(localStorage.getItem('messages')){
//         var mymessages=JSON.parse(localStorage.getItem('messages'));
//         console.log(mymessages);
//         var parentNode=document.querySelector('.messages');
//         mymessages.forEach((element,index) =>{
//             for (let message in element) {
//                 for (let a in element[message]){
//                     console.log(element[message][a])
//                 }
//                 // console.log(element[message])
//                 var listEl=document.createElement('ol');
//                 var textNode=document.createTextNode(`Message:${element.message}`);
//                 listEl.appendChild(textNode);
//                 parentNode.append(listEl);
               
//             }   
//             parentNode.innerHTML=element.message 
//                 var listEl=document.createElement('ol');
//                 var textNode=document.createTextNode(`Message:${element.message}`);
//                 listEl.appendChild(textNode);
//                 parentNode.append(listEl);
                    
//         });
//         console.log(parentNode);

//     }
// }

// const logout=document.querySelector('.logout')

// logout.addEventListener('click', ()=>{
//     window.location.href = '../pages/login.html'
// })





// const apiUrl = 'https://kalimbacapstone.herokuapp.com'

// let rowsNum = 0;
// async function getAllMessage() {
//     response = await fetch( apiUrl + "/messages", {
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             "Authorization": token
//         },

//     } );
//     const data = await response.json();
//     data.forEach( element => {
//         const name = element.names;
//         const email = element.email;
//         const project = element.project;
//         const message = element.message;
//         const date = "Date";
//         const id = element._id;

//         AddNewData( name, email, message, project, date, id );
//     } );
// console.log(data);
// }

// function AddNewData( name, email, message, project, date, id  ) {
//     const messageTr = document.querySelector( '#messages' );

//     let tr = document.createElement( 'tr' );
//     let tdNow = document.createElement( 'td' );
//     let tdName = document.createElement( 'td' );
//     let tdEmail = document.createElement( 'td' );
//     let tdProject = document.createElement( 'td' );
//     let tdMessage = document.createElement( 'td' );
//     let tdAction = document.createElement( 'td' );
//     let tdDate = document.createElement( 'td' );
//     rowsNum += 1;
//     tdNow.innerHTML = rowsNum;
//     tdName.innerHTML = name;
//     tdEmail.innerHTML = email;
//     tdProject.innerHTML = project;
//     tdMessage.innerHTML = message;
//     tdDate.innerHTML = DataDate;
//     tdAction.innerHTML = `<input type='button' class='btn btn-primary-1' value='Reply' onclick='Reply(${_id})'>  <input type='button' class='btn btn-danger' value='Delete' onclick=Delete(this.id) id="${id}">  `;
//     tr.appendChild( tdNow );
//     tr.appendChild( tdName );
//     tr.appendChild( tdEmail );
//     tr.appendChild( tdProject );
//     tr.appendChild( tdMessage );
//     tr.appendChild( tdDate );
//     tr.appendChild( tdAction );
//     messageTr.appendChild( tr );
//     const deleteForm = document.getElementById( "delete" );
// }
// getAllMessage();
// function Delete( id ) {
//     swal( {
//         title: "Attention",
//         text: "Are you sure!! You want to Delete",
//         icon: "warning",
//         buttons: true,

//         dangerMode: true,
//     } ).then( ( willDelete ) => {
//         if ( willDelete ) {
//             fetch( apiUrl + "/messages/" + id, {
//                 method: "DELETE",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                     "Authorization": token
//                 },
//             } ).then( res => res.json() )
//                 .then( json => swal( '"Delete', json.message, 'success' ) );


//         }


//     } );
// }



let norows = 0
function getdataOnIndex()  {
    let posts_div = document.getElementById("messages");
    let dataToDisplay= "";
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://kalimbacapstone.herokuapp.com/messages", requestOptions)
               .then(response => response.json())

               .then(result => {
                  console.log(result.result);
                       result.result.forEach(element=>{
                           dataToDisplay += `
                 <tr>
                 <td>
                               ${norows += 1}
                           </td>
                           <td>
                               ${element.names}
                           </td>
                           <td>
                              ${element.email}
                           </td>
                           <td>
                               ${element.project}
                           </td>
                           <td>
                           ${element.message}
                       </td>
                           <td>
                               <div class="flex">
                                    <a href="new-article.html" onclick="storeData('${element._id}','${element.message}',${element.project}','${element.email}','${element.names});">
                                   <button>Update</button>
                               </a>
                               <a href="#">
                                   <button id='${element._id}' onclick='delete_message(
         this.id
       )' class="delete-button">Delete</button>
  
                                  
                           </td>
                       </tr>
                       `;
                     })
                     posts_div.innerHTML = dataToDisplay;
                    console.log(posts_div)
               })
               .catch(error => console.log('error', error));
     } window.onload=getdataOnIndex();