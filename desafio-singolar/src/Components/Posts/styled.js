import styled from 'styled-components'

export const CardContainet = styled.div`
    border: 1px solid black;
    border-radius: 6px;
    width: 600px;
    height: 200px;
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 20px;
    
`

export const PostRow = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
`

export const ButtonsRow = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    border-top: 1px solid black;

    button {
        flex: 1;
        cursor: pointer;
    }

`

export const Title = styled.div`
    margin-bottom: 20px;
    font-weight: bold;
`

export const Body = styled.div`
`