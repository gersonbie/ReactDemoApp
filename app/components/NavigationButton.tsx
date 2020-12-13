import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../style';

interface Props {
  back?: boolean;
  goTo: string;
  navigation?: any;
}

const NavigationButton = ({ navigation, goTo, back }: Props): JSX.Element => {
  return (
    <View style={styles.row}>
      {back && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => {
            navigation.pop();
          }}
        >
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      )}
      {goTo ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => navigation.push(goTo)}
        >
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default NavigationButton;
