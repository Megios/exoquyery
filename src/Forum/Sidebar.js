import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'

const Sidebar = () => {
  const {isLoading, isError, data,error } = useQuery('user', () => fetch('http://localhost:3004/users').then(res=> res.json()))

  if (isLoading) return <span>Chargement...</span>

  if (isError) return <span>Erreur: {error.message}</span>

  return (
    <Wrapper>
      <InnerWrapper>
        <h2>Utilisateurs du forum</h2>
        {data
          ? <List>
            {data.map((user) => (
              <User key={user.id}>
                {user.username}
                <Status online={user.online}>
                  {user.online ? 'en ligne' : 'hors ligne'}
                </Status>
              </User>
            ))}
          </List> 
          : null
        }
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: 'sidebar';
  padding: 6rem;
`

const InnerWrapper = styled.div`
  background: #FFFFFF;
  border-radius: 6px;
  padding: 1rem 2rem;
`

const List = styled.ul`
  margin-top: 1rem;
`

const User = styled.li`
  margin: 0.5rem 0;
  padding: 1rem;
  background: #F8F8F8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`

const Status = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 6px;
  padding-left: 20px;
  padding-right: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  background: ${props => props.online ? 'hsla(152, 91%, 48%, 0.1)' : 'hsla(0, 0%, 0%, 0.1)'};
  color: ${props => props.online ? 'hsl(152, 91%, 48%)' : '#707070'};
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 7px;
    background: ${props => props.online ? '#0be881' : '#CCC'}
  }
`

export default Sidebar
