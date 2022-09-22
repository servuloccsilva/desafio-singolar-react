import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPostDetails } from '../../Routes/coordinator'
import { Body, ButtonsRow, CardContainet, PostRow, Title, Username } from './styled'

const CardPosts = (props) => {

  const navigate = useNavigate()

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsuarios()
}, [])

  const getUsuarios = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => 
          res.json())
      .then((data) => 
      setUsers(data))
      .catch((err) =>
          console.log(err))
  }

  const findUsuario = users.map((user) => {
    if(user.id == props.userId) {
      return user.username
    }
  })



const handleDelete = () => {

  const result = window.confirm("Are you sure you want to delete this post?")
      if(result){
        props.deletePostagem(props.id)
      }
}


  return (
    <CardContainet>
        <PostRow>
          <Username>Posted by: <span>{findUsuario}</span></Username>
          <Title>{props.title}</Title>
          <Body>{props.body}</Body>
        </PostRow>
        <ButtonsRow>
          <button 
          className='viewPost' 
          onClick={()=> goToPostDetails(navigate, props.id)}
          >
            View Post
          </button>
          <button className='edit'>Edit</button>
          <button className='delete' onClick={handleDelete}>Delete</button>
        </ButtonsRow>
    </CardContainet>
  )
}

export default CardPosts