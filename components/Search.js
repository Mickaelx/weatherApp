import React from 'react'
import style from '../Style'
import {TextInput, Button, View, Text} from 'react-native'

export default class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Strasbourg'
        }
    }

    setCity (city) {
        this.setState({city})
    } 

    submit () {
        this.props.navigation.navigate('List', {city: this.state.city});
    }

    render() {
        return (
            <View style={style.containers}>
                <Text style={style.title}>Search for a city</Text>
                <TextInput style={style.input}
                    //pour faire référence au composant
                    onChangeText={(text) => this.setCity(text)}
                    onSubmitEditing={() => this.submit()}
                    value={this.state.city}
                />
                <Button onPress={() => this.submit()} title="Submit" />
            </View>
            
        )
    }
} 



