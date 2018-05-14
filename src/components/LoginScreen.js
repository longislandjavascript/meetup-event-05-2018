import React, { Component } from 'react';
import { googleLogin } from '../firebase/auth';
import styled from 'styled-components';
import { Button } from 'antd';
import { Container, Title } from './common';

const ErrorText = styled.p`
  color: red;
  width: 80%;
`;

class LoginScreen extends Component {
  state = {
    error: '',
    loading: false,
  };

  login = async () => {
    this.setState({ loading: true });
    try {
      await googleLogin();
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
  };
  render() {
    const { loading, error } = this.state;

    return (
      <Container>
        <Title>Timebits</Title>

        <Button
          onClick={this.login}
          type="primary"
          icon="google"
          loading={loading}
        >
          Login with Google
        </Button>

        <ErrorText>{error.message}</ErrorText>
      </Container>
    );
  }
}

export default LoginScreen;
