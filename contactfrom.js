

// //  Storing Form Data

const apiUrl = 'https://kalimbacapstone.herokuapp.com'

const messageFormData = () => {
    const fullNames = document.getElementById('nameId').value
    const email = document.getElementById('emailId').value
    const project = document.getElementById('projectId').value
    const message = document.getElementById('messageId').value

    const messageData = {fullNames, email, project, message}
    return messageData
}


const clearForm = () => {
    const contactForm = document.getElementById('contactForm')
    contactForm.reset()
    return false
 }


 

const sendQuerry = document.getElementById('sendQuerry')

sendQuerry.addEventListener('click', async (e) => {
    // postNewQuerry()
    e.preventDefault();
    console.log("clicked");


  try{
  const response =  await  fetch(apiUrl + "/message", {

       method: 'POST',
       headers: {
            'Content-Type': 'application/json',
             'Accept': 'application/json'
        },
        body: JSON.stringify({
           names: messageFormData().fullNames,
           email: messageFormData().email,
           project: messageFormData().project,
           message: messageFormData().message
        })
    })
    const data = await response.json()
    console.log(data)
   }catch(error){
     console.log(error);
   }



})



