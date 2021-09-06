import React from "react";

import { Container, Wrapper } from "./styles";
import Main from "../Main";
const layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/*  <MenuBar /> */}
        <Main />
        {/*  <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default layout;
