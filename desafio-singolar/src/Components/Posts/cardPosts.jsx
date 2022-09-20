import React from 'react'
import { Body, ButtonsRow, CardContainet, PostRow, Title } from './styled'

const CardPosts = (props) => {
  return (
    <CardContainet>
        <PostRow>
          <Title>{props.title}</Title>
          <Body>{props.body}</Body>
        </PostRow>
        <ButtonsRow>
          <button className='viewPost'>View Post</button>
          <button className='edit'>Edit</button>
          <button className='delete'>Delete</button>
        </ButtonsRow>
    </CardContainet>
  )
}

export default CardPosts