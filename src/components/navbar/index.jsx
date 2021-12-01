import React, { useState } from "react";
import {
  Button,
  Container,
  Logo,
  Title,
  Wrapper,
  Link,
  activeStyle,
} from "./style";
import home from "../../asstes/icons/home.svg";
import { navbar } from "../../utils/NavbarMock";
export const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  return (
    <Container>
      <Wrapper>
        <Logo src={home} />
        <Title left>Building</Title>
      </Wrapper>
      <Wrapper card>
        {navbar.map(({ title, path }) => (
          <Link activeStyle={activeStyle} to={path}>
            {title}
          </Link>
        ))}
      </Wrapper>
      <Button>Log in</Button>
    </Container>
  );
};
export default Navbar;
