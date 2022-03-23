

// //  Storing Form Data

const apiUrl = 'https://kalimbacapstone.herokuapp.com'

const commentFormData = () => {
    const fullNames = document.getElementById('nameId').value
    const email = document.getElementById('emailId').value
    const comment = document.getElementById('commentId').value

    const messageData = {fullNames, email, comment}
    return messageData
}


const clearForm = () => {
    const commentForm = document.getElementById('commentForm')
    commentForm.reset()
    return false
 }


 

const sendQuerry = document.getElementById('sendQuerry')

sendQuerry.addEventListener('click', async (e) => {
    // postNewQuerry()
    e.preventDefault();
    console.log("clicked");


  try{
  const response =  await  fetch(apiUrl + "/blogs/:id/comments/", {

       method: 'POST',
       headers: {
            'Content-Type': 'application/json',
             'Accept': 'application/json'
        },
        body: JSON.stringify({
           names: commentFormData().fullNames,
           email: commentFormData().email,
           comment: commentFormData().comment
        })
    })
    const data = await response.json()
    console.log(data)
   }catch(error){
     console.log(error);
   }



})



