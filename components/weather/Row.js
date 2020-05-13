import React from 'react'
import style from '../../Style'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default class Row extends React.Component {
    calculCelsuis (temp){
        let cell = Math.floor(temp - 273.15)
        return cell
    }

    render() {
        return (
            <View>
                <Text>{this.calculCelsuis(this.props.data.temp.day)}°C</Text>
            </View>

        )
    }
}