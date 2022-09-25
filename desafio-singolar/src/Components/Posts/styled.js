import styled from 'styled-components'

export const CardContainer = styled.div`
    border: 1px solid #cccccc;
    background-color: #ffffff;
    border-radius: 8px;
    width: 60%;
    min-width: 320px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin: 8px;

    font-family:Segoe UI Historic;
    font-size:15px;
    letter-spacing:0;
    font-style:normal;
    font-weight:400;
    color: rgba(5,5,5,1);
    
    :hover {
        border: 1px solid #898989;
    }
`

export const PostRow = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;

    .username {
        margin-top: -15px;
    }
`

export const ButtonsRow = styled.div`
    display: flex;
    flex: 2;
    justify-content: space-between;
    min-height: 28px;

    button {
        flex: 1;
        border: none;
        border-radius: 3px;
        background-color: white;
        font-weight: bold;
        margin: 2px;
        color: #888b8d;
        cursor: pointer;

        :hover {
            color: white;
            transition: 0.3s;
        }
    }
    .viewPost {
        /* border-right: 1px solid black; */

        :hover {
        background-color: #71bf43;
        border-radius: 3px;
        }    
    }
    .edit {
        /* border-right: 1px solid black; */
        
        :hover {
        background-color: blue;
        }    
    }
    .delete {
        
        :hover {
        background-color: red;
        border-radius: 3px;
        }    
    }

`
export const Username = styled.div`
    margin-left: 20px;
    /* margin-top: 6px; */
    /* font-size: 0.9em; */
    span {
        font-weight: bold;
    }
`

export const Title = styled.div`
    margin-left: 20px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 1.1em;
`

export const Body = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
`