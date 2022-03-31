import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { ImageDiv } from './components/Image';
import { InputImage } from './components/InputImage';
import { store } from './lib/store';

const Flex = styled.div`
display:flex;
align-items: flex-start;
justify-content: center;
flex-wrap: wrap;
`;

const Box = styled.div`
padding: 10px;
`;

export const App = () => (
  <div>
    <Provider store={store}>
      <Flex>
        <h2>My favorite images</h2>
      </Flex>
      <Box>
        <ImageDiv />
        <InputImage />
      </Box>
    </Provider>
  </div>
);
