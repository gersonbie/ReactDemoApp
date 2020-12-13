import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Input from '../components/Input';
import NavigationButton from '../components/NavigationButton';
import { styles} from '../style'

const Question: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Input label="Quantos passos para aprender React Native?" initial="2" gap/>
      <Input label="Quantos campos em cada passo?" initial="2" />
      <NavigationButton back goTo="Step1" navigation={navigation} />
    </View>
  );
};

export default Question;