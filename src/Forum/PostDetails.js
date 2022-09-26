import React from 'react'
import styled from 'styled-components'

const PostDetails = ({ post, onClose }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Link onClick={onClose}>Revenir à la liste des publications</Link>

        <Post>
          <h2>{post.title}</h2>
          <p>
            {post.content}
          </p>
        </Post>
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: 'main';
  background: #5352ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
`

const InnerWrapper = styled.div`
  background: #F1F1F1;
  width: 64rem;
  min-height: 100%;
  padding: 2rem;
  border-radius: 6px;
`

const Link = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`

const Post = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 2rem;
  margin: 0.5rem 0;
`

export default PostDetails
