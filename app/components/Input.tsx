import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../style';

interface Props {
  label?: string;
  initial?: string;
  gap?: boolean;
}

const Input = ({ label, initial,gap }: Props): JSX.Element => {
  return (
    <>
      {label ? <Text style={styles.title}>{label}</Text> : null}
      <TextInput defaultValue={initial} style={[styles.input,{marginBottom: gap ? 24:0}]} />
    </>
  );
};

export default Input;
