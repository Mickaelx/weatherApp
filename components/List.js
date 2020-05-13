import React from 'react'
import style from '../Style'
import axios from 'axios'
import { Item, Text, FlatList, View, ActivityIndicator, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import WeatherRow from './weather/Row'
import moment from 'moment'

export default class List extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            city: this.props.route.params.city,
            report: null
        }
        this.fetchWeather()
    } 

    fetchWeather () {
            axios.get(`https://samples.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&appid=439d4b804bc8187953eb36d2a8c26a02`)
            .then((response) => {
                this.setState({report: response.data})
            })
    };

    calculCelsuis (temp){
        let cell = Math.floor(temp - 273.15)
        return cell
    }

    
    
    render () {
        if(this.state.report === null) {
            return (
                <ActivityIndicator style={style.containers} color={style.color} size="large"/>
            )
        } else {
            const data = this.state.report.list;
           
            return (
                <View style={style.containers}>
                    <Text style={style.title}>Meteo / {this.state.city}</Text>
                    <FlatList data={data} 
                              renderItem={({item}) => 
                                <View style={style.tempContainer}>
                                    <Text style={style.date}>{moment(item.dt * 1000).format('ddd')}, {moment(item.dt * 1000).format('DD/MM')}</Text>
                                    <Text style={style.temp}>{this.calculCelsuis(item.temp.day)}°C </Text>
                                </View>}
                    />
                </View>    
            )
        }
        
    }
}  