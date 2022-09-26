import React from "react";
import { CompanyName, HeaderContainer, HomeButton, Logo } from "./styled";
import LogoImage from "../../Images/logo.jpeg"
import { goToFeed } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Logo>
        <img src={LogoImage} alt="logo"/>
      </Logo>
      <CompanyName>
        SINGOLAR
      </CompanyName>
      <HomeButton>
        <button className="home" onClick={()=> goToFeed(navigate)}>Home</button>
      </HomeButton>
    </HeaderContainer>
  );
};

export default Header;