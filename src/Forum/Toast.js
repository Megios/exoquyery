import React from 'react'
import styled from 'styled-components'
import { useToast } from '../context/toast-context'

const Toast = ({ children }) => {
  const toastContext = useToast()
  return (
    <Wrapper>
      {children}
      <Close onClick={() => toastContext.setToast(null)}>
        &times;
      </Close>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 1rem;
  background: #2ed573;
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Close = styled.div`
  font-weight: bold;
  margin-left: 2rem;
  cursor: pointer;
`

export default Toast
