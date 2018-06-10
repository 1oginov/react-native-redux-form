import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ input: { onChange }, inputProps }) => (
  <NativeTextInput {...inputProps} onChangeText={onChange} />
);

export default TextInput;
