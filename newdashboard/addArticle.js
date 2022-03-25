const apiUrl = 'https://kalimbacapstone.herokuapp.com'


let accessToken = ('; '+document.cookie).split(`; accessToken=`).pop().split(';')[0];
const bearer = `Bearer ${accessToken}`

const createArticleForm = () => {
  const title = document.getElementById('title-value').value
  const content = document.getElementById('content-value').value
  const body = document.getElementById('body-value').value

  const image = document.getElementById('imageUrl-value').value

  return {title, content, body, image}
}

const createArticle = document.getElementById('createArticleBut')


createArticle.addEventListener('click', e => {
  e.preventDefault()
  newArticle()
})

const newArticle= async () => {
  console.log(createArticleForm().title)
  console.log(createArticleForm().content)
  console.log(createArticleForm().body)
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
              body: createArticleForm().body,
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
