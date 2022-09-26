import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardPosts from "../../Components/Posts/cardPosts";
import { FeedContainer, PostsOnly } from "./styled";
import { ButtonForm, FormAndPosts, FormInput } from "./styled";
import useForm from "../../Hooks/useForm";
import Header from "../../Components/Header/header";

const EditPage = () => {

    const [posts, setPosts] = useState([]);


    //Criar postagens
  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost();
};
const [form, onChange, clear] = useForm({ userId: 1, title: "", body: ""});

const createPost = async () => {
    
  await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "PUT",
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
  
    
  return (
    <>
      <Header/>
      <FeedContainer>
        <FormAndPosts>
          <FormInput>
            <form onSubmit={onSubmitForm}>
              <TextField
                className="title"
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
              className="body"
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
      </FeedContainer>
    </>
  );
};
export default EditPage;
