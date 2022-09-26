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

export const CardOutros = styled.div`
    border: 2px solid #cccccc;
    background-color: white;
    border-radius: 8px;
    width: 80%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;

    font-family:Segoe UI Historic;
    font-size:15px;
    letter-spacing:0;
    font-style:normal;
    font-weight:400;
    color: rgba(5,5,5,1);

    h4, p {
        margin-left: 12px;
    }
    
    :hover {
        border: 2px solid #898989;
    }
`