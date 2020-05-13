import React from 'react'
import style from '../Style'
import {Text, Button, View} from 'react-native'

export default class About extends React.Component {
  
    search () {
        this.props.navigation.navigate('Search');
    }

    render() {
        return (
            <View style={style.containers}>
                <Text style={style.title}>About me</Text>
                <Text>Lorem ipsum</Text>
                <Button onPress={() => this.search()} 
                        title="Search a city" />
            </View>
            
        )
    } 
}
