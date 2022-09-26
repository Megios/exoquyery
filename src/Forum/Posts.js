import React from 'react'
import styled from 'styled-components'
import NewPost from './NewPost'
import { useQuery } from 'react-query'

const Posts = ({ onSelectPost }) => {
  const {isLoading, isError, data, error } = useQuery('post', () => fetch('http://localhost:3004/posts').then(res=> res.json()))

  if (isLoading) return <span>Chargement...</span>

  if (isError) return <span>Erreur: {error.message}</span>


  return (
    <Wrapper>
      <InnerWrapper>
        <NewPost />
        <PostsWrapper>
          <h2>Publications</h2>
          <ul>
            {data.map((post) => (
              <Post key={post.id}>
                {post.title} - <Link onClick={() => onSelectPost(post)}>Lire plus...</Link>
              </Post>
            ))}
          </ul>
        </PostsWrapper>
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

const PostsWrapper = styled.div`
  margin-top: 2rem;
`

const Post = styled.li`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 2rem;
  margin: 0.5rem 0;
`

export default Posts
