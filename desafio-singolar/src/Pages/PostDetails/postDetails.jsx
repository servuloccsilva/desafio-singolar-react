import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = (props) => {

    const postId = useParams()

    const [post, setPosts] = useState([])

    useEffect(() => {
        getPostagens()
    }, [])
    
    const getPostagens = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => 
            res.json())
        .then((data) => 
            setPosts(data))
        .catch((err) =>
            console.log(err))
    }

    // Pegando apenas o post específico 
    const filtrandoPosts = (posts) => {
        return posts.find((post)=>{
            if(post.id === postId.id){
                return true
            }
        })
    }


    return (
        <div>
            Details
        </div>
    )
}
export default PostDetails;