import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style';
import Input from './Input';

interface Props {
  step: number;
  gap?: boolean;
}

const Step = ({ step }: Props): JSX.Element => {
  return (
    <>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.title}>{step}</Text>
        </View>
      </View>
      <Text style={styles.title}>{`Passo ${step}`}</Text>
      <Input />
      <Input />
    </>
  );
};

export default Step;
