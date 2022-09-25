import React from 'react'
import { CommentContainer } from './styled';

const CardComment = (props) => {

    return (
        <CommentContainer>
        <h5>{props.name}</h5>
        <p>{props.body}</p>
        
        
    </CommentContainer>
    )
}

export default CardComment