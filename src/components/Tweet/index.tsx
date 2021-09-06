import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>Você retweetou</Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Ismael Albert</strong>
            <span>@ismaelalbert_</span>
            <Dot />
            <time>12 de jun</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>vamo q vamo 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              23
            </Status>
            <Status>
              <RetweetIcon />
              123
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
