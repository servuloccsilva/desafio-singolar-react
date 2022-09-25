import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComment from "../../Components/CardComment/cardComment";
import  CardDetails  from '../../Components/CardDetails/cardDetails'
import CardOtherPosts from "../../Components/CardOtherPosts/cardOtherPosts";
import CardUser from "../../Components/CardUser/cardUser";
import { Comment, DetailsContainer, PostDetailsSide, UserSide } from "./styled";


const Details = (props) => {

    const {postId} = useParams()

    const [postsDetails, setPostsDetails] = useState([])
    const [comments, setComments] = useState([])
    const [users, setUsers] = useState([])
    const [otherPosts, setOtherPosts] = useState([])

    useEffect(() => {
        getPostagem()
        getComentarios()
        getUsuarios()
        getOutrasPostagens()
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
        return <CardComment
        key={comment.id}
        id={comment.id}
        postId={comment.postId}
        name={comment.name}
        body={comment.body}
        />
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
        return <div>
            <p><b>{user.name}</b></p>
            <p className='username'>@{user.username}</p>
      </div>
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

      //Pegar outras postagens do mesmo usuário
      const getOutrasPostagens = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${postsDetails.userId}`)
        .then((res) => res.json())
        .then((data) => setOtherPosts(data))
        .catch((err) => console.log(err));
    };

    //Map outras postagens

    const mapOutrosPosts = otherPosts.map((post) => {
        return <CardOtherPosts
        key={post.id}
        id={post.id}
        userId={post.userId}
        title={post.title}
        body={post.body}
        // findUsuario={findUsuario}
        />
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
                    <br/>
                    <Comment>
                        {/* <br/> */}
                        <p>Comments: </p>
                        
                    </Comment>
                    <div>
                        {mapComentarios}
                    </div>
                    <div>
                        <br/>
                        <Comment>
                            <br/>
                            Other posts from this user: 
                        </Comment>
                    </div>
                    <div>
                        <br/>
                        {mapOutrosPosts} 
                    </div>

            </PostDetailsSide>
        </DetailsContainer>
    )
}
export default Details;