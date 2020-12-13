import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import NavigationButton from '../components/NavigationButton';
import { styles} from '../style'

const Home: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello,{'\n'}React Native!</Text>
      <NavigationButton goTo="Questions" navigation={navigation} />
    </View>
  );
};

export default Home;
