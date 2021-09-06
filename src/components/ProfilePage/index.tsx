import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Ismael Albert</h1>
        <h2>@ismaelalbert_</h2>

        <p>Developer at Web</p>

        <ul>
          <li>
            <LocationIcon />
            Maranhão, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 10 de fevereiro de 2004
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>999</strong>
          </span>
          <span>
            <strong>999 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
