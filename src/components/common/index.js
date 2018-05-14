import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  animation: 1s ${keyframes`${zoomIn}`};
  font-family: 'Audiowide', cursive;
  font-size: 40px;
  margin: 20px;
`;
