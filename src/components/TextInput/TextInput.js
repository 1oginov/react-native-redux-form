import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';

// eslint-disable-next-line react/prop-types
const TextInput = ({ input: { onChange }, inputProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NativeTextInput {...inputProps} onChangeText={onChange} />
);

export default TextInput;
