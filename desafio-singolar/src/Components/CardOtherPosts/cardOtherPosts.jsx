import React from 'react'
import { CardContainer } from './styled';

const CardOutrosPosts = (props) => {

    return (
        <CardContainer>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
    </CardContainer>
    )
}

export default CardOutrosPosts