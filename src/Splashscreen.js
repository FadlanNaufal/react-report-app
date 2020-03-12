import React from 'react';
import { StatusBar ,SafeAreaView , View , Text ,Image, ActivityIndicator } from 'react-native';
export default class SplashScreen extends React.Component {
    render() {
        return (
            
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#00619D'}}>
                <StatusBar backgroundColor="#00619D" barStyle="light-content"/>
                <Image
                    source={require('./../img/logo.png')}
                    style={{ width : 100 , height : 100 }}
                />
                <ActivityIndicator color={'white'}/>
                <Text style={{ color : 'white',fontSize : 15 , paddingTop : 20}}>Please Wait</Text>
            </View>
           
        )
    }
}