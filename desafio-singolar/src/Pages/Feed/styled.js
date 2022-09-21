import styled from "styled-components";

export const FeedContainer = styled.div`
  background-color: #dae0e6;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormAndPosts = styled.div`
  width: 600px;
  border: 2px solid #cccccc;
  border-radius: 3px;
  margin: 10px;
  display: flex;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
`;

export const FormInput = styled.div`
    flex: 1;
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 12px;

       

    }
`;
export const ButtonForm = styled.div`
  margin-top: 6px;
  align-self: center;
  
  button {
    border-radius: 6px;
    border: 0px;
    width: 100px;
    padding: 8px;
    :hover {
      background-color: #71bf43;
      transition: 0.4s;
      color: white;
    }
  }
`;


