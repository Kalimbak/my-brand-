
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
            }

               function delete_message(id) {
                let token = localStorage.getItem("token");
                console.log(id)
                var myHeaders = new Headers();
                myHeaders.append("Authorization", token);
          
                var requestOptions = {
                  method: 'DELETE',
                  headers: myHeaders,
                  redirect: 'follow'
                };
          
                fetch(`https://kalimbacapstone.herokuapp.com/messages/${id}`, requestOptions)
                  .then(response => response.text())
                  .then(result => {
                    console.log(result)
                    alert("Message deleted well done")
                    getdataOnIndex()
        
        
                  })
        
                
              
                .catch(error => console.log('error', error));
              }
              window.onload=getdataOnIndex();