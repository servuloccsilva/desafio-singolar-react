import React from 'react'
import { Body, CardContainer, PostRow, Title, Username } from './styled';

const CardDetails = (props) => {

    return (
        <CardContainer>
        <PostRow>
          <Username>{props.username}</Username>
          <Title>{props.title}</Title>
          <Body>{props.body}</Body>
        </PostRow>
        
    </CardContainer>
    )
}

export default CardDetails