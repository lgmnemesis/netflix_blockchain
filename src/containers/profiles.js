import React from 'react';
import * as ROUTES from '../constants/router';
import logo from '../logo.svg';
import { Header, Profiles } from '../components';

export function SelectProfileContainer({user, setProfile }) {
  
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix'/>
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
            <Profiles.Picture src={user && user.photoURL}/>
            <Profiles.Name>{user && user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
    
  );
}