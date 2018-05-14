import React from 'react';
import { logout } from '../firebase/auth';
import { Button, Avatar } from 'antd';
import { Container, Title } from './common';

const HomeScreen = props => {
  return (
    <Container>
      <Title>Timebits</Title>
      <Button size="large" color="primary" onClick={logout}>
        <Avatar src={props.user.photoURL} /> Logout
      </Button>
    </Container>
  );
};

export default HomeScreen;
