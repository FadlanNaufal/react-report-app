import React from 'react'
import {Text,View,TextInput} from 'react-native'

const Searchbar = () => {
    return(
        <View>
           <TextInput
           style={{ height: 40, paddingLeft : 20 , borderColor: '#EFF7FE', borderRadius : 10 ,borderWidth: 4 }}
            placeholder="Search"
           />
        </View>
    )
}

export default Searchbar