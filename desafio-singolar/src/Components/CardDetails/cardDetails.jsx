import React from 'react'
import { Body, CardContainer, PostRow, Title, Username } from './styled';

const CardDetails = (props) => {

    return (
        <CardContainer>
        <PostRow>
          <Username>Posted by: <span>{props.username}</span></Username>
          <Title>{props.title}</Title>
          <Body>{props.body}</Body>
        </PostRow>
        
    </CardContainer>
    )
}

export default CardDetails