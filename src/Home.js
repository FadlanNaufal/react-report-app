import React, { Component } from 'react';
import { View, Text ,FlatList, Button, TextInput,  Image, StyleSheet } from 'react-native';
import {Col,Row,Grid} from 'react-native-easy-grid';
import axios from 'axios';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Searchbar from './Searchbar'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.arrayHolder = []
    this.state = {
        data : [],
        loading : true,
    };
  }

  componentDidMount(){
    this.getData() 
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        loading: false,
        data: responseJson,
      }, function(){
          this.arrayHolder = responseJson
          console.log(responseJson);
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  history=(item)=>{
    this.props.navigation.navigate('History', {name : 'Fadlan'})
  }

  searchFilterFunction = (text) =>{
    const newData = this.arrayHolder.filter(item=>{
      const itemData = `${item.name.toUpperCase()}
      ${item.username.toUpperCase()} ${item.email.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data : newData
    })
  }

  render() {
    return (
      <View style={styles.container}>
         <View style={{marginBottom : 20,flexDirection : 'row',}}>
          <TextInput
           style={{ height: 40, paddingLeft : 20 , borderColor: '#EFF7FE', borderRadius : 10 ,borderWidth: 4, width : 300}}
            placeholder="Search"
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
           />
           <TouchableOpacity onPress={this.history} style={{width : 50,right : 0,backgroundColor : '#3C98D1', justifyContent : 'center', alignItems : 'center' , height : 40, marginLeft : 10 , borderRadius : 7 }}>
            <Image source={require('./../img/history.png')} style={{width : 30,height : 30}} />
           </TouchableOpacity>
        </View>
       
        {
            this.state.loading ? 
            <View style={styles.loadingBody}>
                <UIActivityIndicator style={{marginTop : 200}} color='#00619D' />
            </View> :

              <ScrollView  style={styles.mainBody}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={()=>alert(item.id)} style={{backgroundColor : 'white',height : 100,width : '100%',marginBottom : 10, elevation : 1}}>
                            <View style={{flexDirection : 'row'}}>
                                <Image source={{uri :'https://pluspng.com/img-png/burger-king-logo-png--500.png'}} style={{width : 50,height : 50}} />
                                <Text style={{fontWeight : 'bold',width : '60%'}} numberOfLines={1}>{item.name}</Text>
                                <Text style={{color :'gray',fontSize : 11,right :0 ,position : 'absolute'}}> 6 Hours Ago </Text>
                            </View>
                            <View>
                            <Text style={{fontWeight : 'bold',width : '60%'}} numberOfLines={1}>{item.username}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={({id}, index) => id}
                    />
            </ScrollView>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        padding : 10
    },
    header : {
        height : 100,
        width : '100%',
        backgroundColor : '#00619D',
        borderRadius: 10,
        marginBottom : 20
    }, 
    analyst : {
        padding : 20,
        backgroundColor : 'white',
        height : 150,
        width : '100%',
        marginTop : -90,
        borderRadius : 10,
    },
    mainBody :{
     
    },
    loadingBody : {
        maxHeight : '100%',
    },

})