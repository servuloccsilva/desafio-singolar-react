import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  CardDetails  from '../../Components/CardDetails/cardDetails'
import CardUser from "../../Components/CardUser/cardUser";
import { DetailsContainer, PostDetailsSide, UserSide } from "./styled";


const PostDetails = (props) => {

    const {postId} = useParams()

    const [postsDetails, setPostsDetails] = useState([])
    const [comments, setComments] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        getPostagem()
        getComentarios()
        getUsuarios()
    }, [])
    
    //Pegar postagens
    const getPostagem = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => setPostsDetails(data))
        .catch((err) => console.log(err));
    };

    //Pegar comentários
    const getComentarios = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((err) => console.log(err));
    };

    const mapComentarios = comments.map((comment) => {
        return <div>
            <p>{comment.name}</p>
        </div>
    })

    //Pegar Usuário
    const getUsuarios = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => 
            res.json())
        .then((data) => 
        setUsers(data))
        .catch((err) =>
            console.log(err))
    }
  
    //Map para passar nome do username para o card do post
    const findUsuario = users.map((user) => {
      if(user.id == postsDetails.userId) {
        return user.username
      }
    })

    //Map para card com informações do user
    const mapUsuario = users.map((user) => {
        if(user.id == postsDetails.userId) {
          return <CardUser
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          website={user.website}
          />
        }
      })


    return (
        <DetailsContainer>
            <UserSide>
                {mapUsuario}
            </UserSide>
            <PostDetailsSide>
                <CardDetails
                    id = {postsDetails.id}
                    key = {postsDetails.id}
                    title = {postsDetails.title}
                    body = {postsDetails.body}
                    uderId = {postsDetails.userId}
                    username = {findUsuario}
                    />
                    <div>
                        Comments: 
                    </div>
                    <div>
                        {mapComentarios}
                    </div>

            </PostDetailsSide>
        </DetailsContainer>
    )
}
export default PostDetails;