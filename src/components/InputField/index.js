import React, { forwardRef } from 'react';

import { View } from 'react-native';

import { Container, TInput } from './styles';

const InputField = ({ style, ...rest }) => {
  return (
    <Container style={style}>
      <TInput {...rest} />
    </Container>
  );
};

export default forwardRef(InputField);
