import React from 'react';
import { View } from 'react-native';
import NavigationButton from '../components/NavigationButton';
import Step from '../components/Step';
import { styles} from '../style'

const Step1: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Step step={1} />
      <NavigationButton back goTo="Step2" navigation={navigation} />
    </View>
  );
};

export default Step1;
