import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home/index";
import Eco from "./screens/Eco/index";
import Sobre from "./screens/Sobre/index";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Eco" component={Eco} />
        <Stack.Screen name="Sobre" component={Sobre} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}