import styled from 'styled-components'

export const CardContainer = styled.div`
    border: 2px solid #cccccc;
    background-color: white;
    border-radius: 8px;
    width: 80%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin-top: 20px;

    font-family:Segoe UI Historic;
    font-size:15px;
    letter-spacing:0;
    font-style:normal;
    font-weight:400;
    color: rgba(5,5,5,1);
    
    :hover {
        border: 2px solid #898989;
    }
`

export const PostRow = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
`


export const Username = styled.div`
    margin-left: 20px;
    margin-top: 6px;
    
    .username {
        margin-top: -15px;
    }
`

export const Title = styled.div`
    margin-left: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.1em;
`

export const Body = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
`