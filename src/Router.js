
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login'
import Home from './Home'
import History from './History'

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
                    headerLeft : null,
                    headerTransparent : true,
                    headerTitle : ''
                }}
                name="Home" 
                component={Home} 
                />

                <Stack.Screen 
                  name="History" 
                  style={{
                    headerTitleAlign : 'center',
                    headerTitle : 'Lapor App',
                    headerStyle : {
                      elevation : 0,
                      shadowOpacity : 0
                    },
                    headerTintColor : 'black',
                    headerLeft : null
                  }}
                  component={History} 
                />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
}