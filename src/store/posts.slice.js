
const newPost = (newPost) =>{
  fetch('http://localhost:3004/posts', {
  method: 'POST',
  body: JSON.stringify(newPost),
  headers :{
    'content-type': 'application/json'
  }
});
}

export {newPost };