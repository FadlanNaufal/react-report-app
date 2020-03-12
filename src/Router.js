
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login'
import Home from './Home'

const Stack = createStackNavigator();
console.disableYellowBox = true;

export default class Router extends React.Component {
  render(){
    return (
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen
            options={{
                headerTitle : null,
                headerTransparent : true
                }}
              name="Login"
              component={Login}
            />
            <Stack.Screen 
                options={{
                    headerTitleAlign : 'center',
                    headerTitle : 'Lapor App',
                    headerStyle : {
                      elevation : 0,
                      shadowOpacity : 0
                    },
                    headerTintColor : 'black',
                    headerLeft : null
                }}
                name="Home" 
                component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
}