import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const Wrapper = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const Loading = () => (
  <Wrapper>
    <ActivityIndicator size="large" color="#1D3062" />
  </Wrapper>
);

export default Loading;
