import React, { useState } from 'react'
import { newPost } from '../store/posts.slice'
import styled from 'styled-components'
import { useMutation,useQueryClient } from 'react-query'
import { useToast } from '../context/toast-context'
import Toast from './Toast'

const NewPost = () => {
  const toast = useToast()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const queryClient = useQueryClient()
  const newPostMutation = useMutation(newPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
      toast.setToast({
        content: 'Le post a bien été envoyé !'
      })
    }
  })

  const handleTitleInput = e => setTitle(e.target.value)
  const handleContentInput = e => setContent(e.target.value)
  const handleSubmit = () => {

    if (title && content) {
      newPostMutation.mutate({
        id: Math.random(),
        title,
        content
      })
    }
  }
  return (
    <Wrapper>
      <h2>Nouvelle publication</h2>
      <input
        type="text"
        value={title}
        onChange={handleTitleInput}
      />
      <textarea
        value={content}
        onChange={handleContentInput}
      />
      <Button
        type="button"
        onClick={handleSubmit}
      >
        Post
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  background: #fff;
  border-radius: 4px;
  padding: 2rem;

  input,
  textarea {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0.5rem 0;
    padding: 1rem;
    font-family: inherit;
  }
  
  input {
    height: 2.5rem;
  }

  textarea {
    height: 10rem;
  }
`

const Button = styled.button`
  background: #5352ed;
  border: none;
  padding: 1rem 4rem;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`

export default NewPost
