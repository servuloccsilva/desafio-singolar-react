import React from 'react'
import { Body, CardContainer, PostRow, Title, Username } from './styled';

const CardOtherPosts = (props) => {

    return (
        <CardContainer>
        <PostRow>
          {/* <Username><b>{props.findUsuario}</b></Username> */}
          <Title>{props.title}</Title>
          <Body>{props.body}</Body>
        </PostRow>
        
    </CardContainer>
    )
}

export default CardOtherPosts