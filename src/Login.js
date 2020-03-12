/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
  Button,
  View,
  TouchableOpacity,
  Animated,
  Text,
  AsyncStorage,
} from 'react-native';

export default class App extends Component{

    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password : true,
          opacity : new Animated.Value(0),
          position : new Animated.Value(0),
        }
      }


    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        Animated.parallel([this.opacityAnim() , this.positionAnim()]).start()
      }

      
    login=()=>{
        this.props.navigation.navigate('Home')
    }


      opacityAnim = () => {
        Animated.timing(this.state.opacity,{
          toValue : 1,
          duration : 500,
          delay : 100
        }).start()
      }
    
      positionAnim = () => {
        Animated.timing(this.state.position,{
          toValue : 1,
          duration : 700,
          useNativeDriver : true
        }).start()
      }

  render(){
    const { opacity } = this.state
    const  logoTransition  = this.state.position.interpolate({
      inputRange : [0,1],
      outputRange : [150,0]
    })
    return(
      <View style={{ flex : 1 , backgroundColor : '#00619D' }}>
        <Animated.View  style={{ flex : 1 , transform : [
            {
                translateY :  logoTransition
            }
        ] }}>
            <View style={{flex: 1 , alignItems : 'center' , justifyContent : 'center' , marginTop : 30}}>
                <Image
                    source={require('./../img/logo.png')}
                    style={{ width : 100 , height : 100 }}
                />
                <Text style={{
                    fontFamily : 'Futura',
                    fontSize  : 20,
                    color : 'white',
                    fontWeight : 'bold',
                    marginTop : 10
                }}>APEMAS</Text>
                <Text style={{
                    fontFamily : 'Verdana',
                    fontSize  : 14,
                    color : 'white',
                    marginTop : 10
                }}>Aplikasi Pengaduan Masyarakat</Text>
            </View>
        </Animated.View>
        <Animated.View  style={{flex : 0.8 , width : '100%' ,opacity}}>
           <View style={{padding : 20}}>
            <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                value={this.state.email}
                textContentType="emailAddress"
                onChangeText={(email) => this.setState({ email })}
                clearButtonMode="always"
                style={{ height: 40, paddingLeft : 20 , borderColor: 'white', borderRadius : 10 ,borderWidth: 1 }}
                />
           </View>
           <View style={{padding : 20}}>
            <TextInput
                placeholder="Password"
                placeholderTextColor="white"
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry
                textContentType="password"
                style={{ height: 40, paddingLeft : 20 , borderColor: 'white', borderRadius : 10 ,borderWidth: 1 }}
                />
           </View>
           <View style={{padding : 20 , alignItems  : 'center'}}>
                <TouchableOpacity
                onPress={this.login}
                    style={{
                        width : '40%',
                        alignItems : 'center',
                        marginLeft : 150,
                        height : 40,
                        justifyContent : 'center',
                        borderRadius: 10,
                        backgroundColor : '#3C98D1'
                    }}
                >
                <Text style={{
                    fontSize : 15,
                    color  : 'white'
                }}>Sign in</Text>
                </TouchableOpacity>
           </View>
        </Animated.View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container : {
    flex :  1,
    justifyContent  : 'center',
    alignItems: 'center'
  }
})