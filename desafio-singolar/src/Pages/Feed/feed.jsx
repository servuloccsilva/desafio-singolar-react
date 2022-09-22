import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardPosts from "../../Components/Posts/cardPosts";
import { FeedContainer } from "./styled";
import { ButtonForm, FormAndPosts, FormInput } from "./styled";
import useForm from "../../Hooks/useForm";

const Feed = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    getPostagens();
  }, []);

  //Pegar postagens
  const getPostagens = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  };

  
  //Criar postagens
  const onSubmitForm = (event) => {
      event.preventDefault();
      createPost();
  };
  const [form, onChange, clear] = useForm({ userId: 1, title: "", body: ""});

  const createPost = async () => {
      
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
      body: JSON.stringify({
          title: form.title,
          body: form.body,
          userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((res) => {
        if (res.status !== 201) {
            return;
        } else {
            return res.json();
        }
    })
    .then((data) => {
        setPosts([...posts, data]);
        // getPostagens()
        clear()
    })
    .catch((err) => {
        console.log(err);
      });
    };

      //Deletar post

  const deletePostagem = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then((res) => {
      if(res.status !==200){
        return console.log("Erro ao deletar");
      } else {
        setPosts(posts.filter((post) => {
            return post.id !== id
        }))
      }
    })
    .catch((err) => {
        console.log(err);
    })
  }
    
    
    const postagens = posts.map((post) => {
      return (
        <CardPosts
          id={post.id}
          key={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
          deletePostagem={deletePostagem}

        />
      );
    });

    console.log(posts);
    
  return (
    <FeedContainer>
      <FormAndPosts>
        <FormInput>
          <form onSubmit={onSubmitForm}>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              name="title"
              value={form.title}
              onChange={onChange}
              required
              type={"text"}
            />
            <TextField
              id="body"
              label="Message"
              variant="outlined"
              name="body"
              value={form.body}
              onChange={onChange}
              required
              type={"text"}
            />
            <ButtonForm>
              <button>Send</button>
            </ButtonForm>
          </form>
        </FormInput>
      </FormAndPosts>
      {postagens}
    </FeedContainer>
  );
};
export default Feed;
