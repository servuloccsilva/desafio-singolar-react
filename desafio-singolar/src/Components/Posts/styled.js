import styled from 'styled-components'

export const CardContainet = styled.div`
    border: 2px solid #cccccc;
    background-color: white;
    border-radius: 3px;
    width: 600px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
    margin: 8px;
    
    :hover {
        border: 2px solid #898989;
    }
`

export const PostRow = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
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
        background-color: green;
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

export const Title = styled.div`
    margin: 20px;
    font-weight: bold;
    font-size: 1.1em;
`

export const Body = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
`