import React from 'react';
import { View } from 'react-native';
import NavigationButton from '../components/NavigationButton';
import Step from '../components/Step';
import { styles} from '../style'

const Step2: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Step step={2} />
      <NavigationButton back goTo="" navigation={navigation} />
    </View>
  );
};

export default Step2;
