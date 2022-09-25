import styled from "styled-components";

export const DetailsContainer = styled.div`
  background-color: #dae0e6;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
`

export const UserSide = styled.div`
  flex: 1;
  border-right: 1px solid #898989;
  display: flex;
  flex-direction: column;
  align-items: center;

  .username {
    margin-top: -15px;
  }

`
export const Comment = styled.div`
  
  border-top: 1px solid #898989;
  width: 80%;
`

export const PostDetailsSide = styled.div`
  flex: 3;
  margin-left: 20px;
`