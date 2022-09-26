import React, { useState } from 'react'
import styled from 'styled-components'
import Posts from './Posts'
import PostDetails from './PostDetails'
import Sidebar from './Sidebar'
import { ToastProvider } from '../context/toast-context'

const Forum = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <ToastProvider>
    <Wrapper>
      {selectedPost
        ? <PostDetails
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        : <Posts onSelectPost={(post) => setSelectedPost(post)} />
      }
      <Sidebar />
    </Wrapper>
    </ToastProvider>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #F5F5F5;
  display: grid;
  grid-template-columns: auto 30vw;
  grid-template-rows: auto;
  grid-template-areas: 'main sidebar';
`

export default Forum
