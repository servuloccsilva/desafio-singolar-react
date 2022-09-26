import styled from "styled-components"


export const HeaderContainer = styled.div`
display: flex;
height: 10vh;
justify-content: space-around;
align-items: center;


    font-family:Segoe UI Historic;
    font-size:20px;
    letter-spacing:0;
    font-style:normal;
    font-weight:400;
    color: rgba(5,5,5,1);


`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
        img {
            height: 50px;

        }
`

export const CompanyName = styled.div`
    display: flex;
    justify-content: center;
    flex: 3;
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #4682B4;
    font-style: italic;
`

export const HomeButton = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    border-radius: 6px;
    background-color: white;
    
    button {
        border: none;
        background-color: white;
    }
    
    .home {
        cursor: pointer;
        font-size:20px;
        letter-spacing:0;
        font-style:normal;
        font-weight:400;
        color: rgba(5,5,5,1);
        text-decoration: none;
        padding: 6px 12px;
        border-radius: 6px;

        :hover {
            background-color: #dae0e6;
            transition: 0.3s;
            /* color: white; */
        }
    }

    
`