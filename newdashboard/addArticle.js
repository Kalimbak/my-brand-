// var imageUrl
// document.getElementById("imageUrl-value").addEventListener('change', function() {
//   const image = new FileReader()
//   image.readAsDataURL(this.files[0])
//   image.addEventListener('load' , ()=>{
//     imageUrl = image.result
//     console.log(imageUrl);
//   })
// })

// const postsList = document.getElementById('posts-list-row');
// let output = '';  
// const form = document.querySelector('form');
// const titleValue = document.getElementById('title-value');
// const contentValue = document.getElementById('content-value');
// const imageUrlValue = document.getElementById('imageUrl-value');
// const userIdValue = document.getElementById('userId-value');
// const btnSubmit = document.querySelector('.btn')
// const renderPosts = (posts) => {
//   posts.forEach(post => {
    
//     output += `<div class="card">
//     <div class="card-body" data-id=${post._id}>
//       <h5 class="card-title">${post.title}</h5>
//       <img class="card-imageURL" src=${post.imageUrl}>
//       <p class="card-text">${post.content}?</p>
//       <h7 class="card-userId">${post.userId}</h7>
//       <a href="#" class="card-link" id="edit-post">Edit</a>
//       <a href="#" class="card-link" id="delete-post" >Delete</a>
//       <textarea class="form-comment" placeholder="Leave a comment here" rows="5"></textarea>
//       <button class"from-button" id="comment-post">comment</button>
//       <h7 class="card-comment">${post.comment}</h7>
     
     

//     </div>
   
//   </div>`;
  
// });
// postsList.innerHTML=output;

// }

  

// const url =  'https://kalimbacapstone.herokuapp.com/blogs';



// // Get -  read the posts
// //method Get
// fetch(url)
// .then(res => res.json())
// // .then (data => renderPosts(data))

// postsList.addEventListener('click', (e) => {
//   const token = localStorage.getItem("token");
//   e.preventDefault();
//   let delButtonIsPressed = e.target.id == 'delete-post';
//   let editButtonIsPressed = e.target.id == 'edit-post';
//   // let commentButtonIsPressed = e.target.id == 'comment-post'

//   let id = e.target.parentElement.dataset.id;

//   if(delButtonIsPressed) {
//     fetch(`${url}/${id}`, {
//       method:'DELETE',
//       headers: {
//         'content-type': 'application/json',
//         'authorization': `Bearer ${token}`
//       },
//     })
//     .then(res => res.json())
//     .then(() => location.reload())
//   }

//   if(editButtonIsPressed) {
    
//     const parent = e.target.parentElement;
//     let titleContent = parent.querySelector('.card-title').textContent;
//     let contentContent = parent.querySelector('.card-text').textContent;
//     let imageUrlContent = parent.querySelector('.card-imageUrl');
//     let userIdContent = parent.querySelector('.card-userId').textContent;
   

//     titleValue.value = titleContent;
//     contentValue.value = contentContent;
//     imageUrlValue.value = imageUrlContent;
//     userIdValue.value = userIdContent;
    
//   }

//   // update - update the existing post
//   // METHOD: PATCH
//   btnSubmit.addEventListener('click', (e) => {
    
//     e.preventDefault();
//     const token = localStorage.getItem("token");
    
//     fetch(`${url}/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json',
//         'authorization': "Bearer " + token
//       },
//       body: JSON.stringify( {
//         title: titleValue.value,
//         content: contentValue.value,
//         imageUrl: imageUrlValue.value,
//         userId: userIdValue.value
      
//       })
     
//     }) .then(res => res.json())
//     .then(() =>  location.reload())
//   })
// })


    
  
// // create = Insert new post
// // Method: POST
// let image = document.getElementById("imageUrl-value").files[0]
// form.addEventListener('submit', (e) => {
//   const token = localStorage.getItem("token");
//   e.preventDefault();

// const formData = new FormData()
// formData.append('title', titleValue.value)
// formData.append('content', contentValue.value)
// formData.append('imageUrl', document.getElementById("imageUrl-value").files[0])
// formData.append('userId', userIdValue.value)
//  fetch(url,
//  {
//    method: 'POST',
//    headers: {
//      'authorization': `Bearer ${token}`
//    },
  
//   body: formData
//  })
 
//  .then((res) => {
//    console.log(res);
//    const dataArr = [];
//    dataArr.push(res.json);
//    renderPosts(dataArr);
//  })

//  //reset input field to empty

//  titleValue.value = '';
//  contentValue.value = '';
//  imageUrlValue.value = '';
//  userIdValue.value = '';
// })





const apiUrl = 'https://kalimbacapstone.herokuapp.com'


let accessToken = ('; '+document.cookie).split(`; accessToken=`).pop().split(';')[0];
const bearer = `Bearer ${accessToken}`

const createArticleForm = () => {
  const title = document.getElementById('title-value').value
  const content = document.getElementById('content-value').value
  const image = document.getElementById('imageUrl-value').value

  return {title, content, image}
}

const createArticle = document.getElementById('createArticleBut')


createArticle.addEventListener('click', e => {
  e.preventDefault()
  newArticle()
})

const newArticle= async () => {
  console.log(createArticleForm().title)
  console.log(createArticleForm().content)
  console.log(createArticleForm().image)
  try {
      fetch(apiUrl  + "/blogs", {
          method: 'POST',
          headers: {
              'Authorization': bearer,
              'Content-Type': 'application/json'
           },
           body: JSON.stringify({
              title: createArticleForm().title,
              content: createArticleForm().content,
              imageUrl: createArticleForm().image

           })
       }).then(res => {
          if (res.ok === true ) return res.json()
          console.log(`Error Happened...>> Status Code: ${res.status}`) 
          }).then(data => {
              alert('Article Created Successfully')
              clearArticleForm()
       })
  } catch (error) {
      console.log(error)
  }
}

const clearArticleForm = () => {
  const articleForm = document.getElementById('articleForm')
  articleForm.reset()
  return false
}
