import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 80%;
    background-color: white;
    border-radius: 8px;
    margin-top: 20px;
    padding: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.15);

    font-family:Segoe UI Historic;
    font-size:15px;
    letter-spacing:0;
    font-style:normal;
    font-weight:400;
    color: rgba(5,5,5,1);

    h5, p {
        margin-left: 12px;
    }

    :hover {
        background-color: #e4e6e9;
        transition: 0.3s;
    }
`