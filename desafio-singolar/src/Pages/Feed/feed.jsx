import React, { useEffect, useState } from "react";
import CardPosts from "../../Components/Posts/cardPosts";


const Feed = () => {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

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

    console.log(posts)

    const postagens = posts.map((post) => {
        return <CardPosts
        id={post.id}
        key={post.id}
        user={post.userId}
        title={post.title}
        body={post.body}
        />
})

    return (
        <div>
            {postagens}
        </div>
    )
}
export default Feed;