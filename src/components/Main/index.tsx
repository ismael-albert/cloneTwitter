import React from "react";

import { Container, Header, BackIcon, Profileinfor } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <Profileinfor>
          <strong>Ismael Albert</strong>
          <span>123 Tweets</span>
        </Profileinfor>
      </Header>

      {/*  <ProfilePage /> */}
      {/*  <BottomMenu>
         <HomeIcon/>
         <SearchIcon/>
         <BellIcon/>
         <EmailIcon/>
     </BottomMenu> */}
    </Container>
  );
};

export default Main;
