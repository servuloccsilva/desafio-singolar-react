import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToEditPage, goToPostDetails } from '../../Routes/coordinator'
import { Body, ButtonsRow, CardContainer, PostRow, Title, Username } from './styled'

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
      return <div>
        <p><b>{user.name}</b></p>
        <p className='username'>@{user.username}</p>
      </div>
    }
  })



const handleDelete = () => {

  const result = window.confirm("Are you sure you want to delete this post?")
      if(result){
        props.deletePostagem(props.id)
      }
}


  return (
    <CardContainer>
        <PostRow>
          <Username>{findUsuario}</Username>
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
          <button className='edit' 
          onClick={()=> goToEditPage(navigate, props.id)}
          >Edit</button>
          <button className='delete' onClick={handleDelete}>Delete</button>
        </ButtonsRow>
    </CardContainer>
  )
}

export default CardPosts