import React from 'react'
import { UserContainer } from './styled';

const CardUser = (props) => {

    return (
        <UserContainer>
            <p>User Datails: </p>
            <p>Name: {props.name}</p>
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>Website: {props.website}</p>
        </UserContainer>
    )
}

export default CardUser