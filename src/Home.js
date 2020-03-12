import React, { Component } from 'react';
import { View, Text ,FlatList, Button,  Image, StyleSheet } from 'react-native';
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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [],
        loading : true
    };
  }

  componentDidMount(){
    this.getData() 
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        loading: false,
        data: responseJson,
      }, function(){
          console.log(responseJson);
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Grid>
                <Col style={{padding : 15}}>
                    <Image 
                    source={require('../img/header.png')}
                    style={{height : 100,width : 100,marginBottom : 20}}
                    />
                </Col>
                <Col style={{marginRight : 100,marginTop : 30}}>
                    <Text style={{fontWeight : 'bold'}}>
                        Menampilkan laporan terkini di desa
                    </Text>
                </Col>
            </Grid>
        </View>
        {
            this.state.loading ? 
            <View style={styles.loadingBody}>
                <UIActivityIndicator style={{marginTop : 200}} color='#00619D' />
            </View> :
            <ScrollView style={styles.mainBody}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={()=>alert(item.id)} style={{backgroundColor : 'white',height : 100,width : '100%',marginBottom : 10, elevation : 1}}>
                            <View style={{flexDirection : 'row'}}>
                                <Image source={{uri :'https://pluspng.com/img-png/burger-king-logo-png--500.png'}} style={{width : 50,height : 50}} />
                                <Text style={{fontWeight : 'bold',width : '60%'}} numberOfLines={1}>{item.title}</Text>
                                <Text style={{color :'gray',fontSize : 11,right :0 ,position : 'absolute'}}> 6 Hours Ago </Text>
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
        height : 120,
        width : '100%',
        backgroundColor : '#EFF7FE',
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
    }
})