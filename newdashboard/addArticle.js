const apiUrl = 'https://kalimbacapstone.herokuapp.com'


let accessToken = ('; '+document.cookie).split(`; accessToken=`).pop().split(';')[0];
const bearer = `Bearer ${accessToken}`

const createArticleForm = () => {
  const title = document.getElementById('title-value').value
  const content = document.getElementById('content-value').value
  const body = document.getElementById('body-value').value

  const image = document.getElementById('imageField').files[0]

  return {title, content, body, image}
}

const createArticle = document.getElementById('createArticleBut')


createArticle.addEventListener('click', e => {
  e.preventDefault()
  newArticle()
})

const newArticle= async () => {
  createArticleForm()
 const formData = new FormData()
 const {title, content, body, image} = createArticleForm()
formData.append("title",title)
formData.append("content",content)
formData.append("body",body)
formData.append("imageUrl",image)

 

  try {
      fetch(apiUrl  + "/blogs", {
          method: 'POST',
          headers: {
              'Authorization': bearer,
            
           },
      body: formData
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
