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
          <button>View Post</button>
          <button>Edit</button>
          <button>Delete</button>
        </ButtonsRow>
    </CardContainet>
  )
}

export default CardPosts