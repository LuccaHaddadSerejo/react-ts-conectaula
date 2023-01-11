import React, { useContext } from "react";
import { Button } from "../../components/Button";
import logoutIcon from "../../assets/img/logoutImg.svg";
import headerLogo from "../../assets/img/headerLogo.svg";
import { StyledContainer, StyledHeader } from "./style";
import { UserContext } from "../../contexts/userContext";
 const Header = () => {
  const { logout } = useContext(UserContext);

  return (
    <StyledContainer>
      <StyledHeader>
        <div>
          <img src={headerLogo} alt="Logout Icon" />
          <h1>ConectAula</h1>
        </div>
        <nav>
          <Button
            onClick={() => logout()}
            buttonVariation="logout"
            type={"button"}
          >
            Logout <img src={logoutIcon} alt="Logout Icon" />
          </Button>
        </nav>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
