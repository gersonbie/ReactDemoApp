import * as React from 'react';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
