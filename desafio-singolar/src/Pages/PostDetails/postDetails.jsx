import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  CardDetails  from '../../Components/CardDetails/cardDetails'


const PostDetails = (props) => {

    const {postId} = useParams()

    const [postsDetails, setPostsDetails] = useState([])

    useEffect(() => {
        getPostagem()
    }, [])
    
    //Pegar postagens
    const getPostagem = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => setPostsDetails(data))
        .catch((err) => console.log(err));
    };

    console.log(postsDetails);
    // Pegando apenas o post específico 
    // const mapPostagem = postsDetails.map((post) => {
    //     return (
    //     <CardDetails
    //     id = {post.id}
    //     key = {post.id}
    //     title = {post.title}
    //     body = {post.body}
    //     uderId = {post.userId}
    //     />
    //     )
    // })

    console.log(postId);




    return (
        <div>
            
            <CardDetails
                id = {postsDetails.id}
                key = {postsDetails.id}
                title = {postsDetails.title}
                body = {postsDetails.body}
                uderId = {postsDetails.userId}
            />


            {/* {postsDetails ? postsDetails.map((post) => { return post.title}) : 'Loading ...'} */}
        </div>
    )
}
export default PostDetails;