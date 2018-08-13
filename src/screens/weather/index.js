import React from 'react';
import { View, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

import data from '../../config/data';
import WeatherIcon from './components/weatherIcon';

export default class WeatherSceen extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.sample(data);
    }

    getBackgroundColors() {
        switch (this.state.weather) {
            case 'CLOUDY':
                return ['#1C4460', '#0B171E'];
            case 'RAINY':
                return ['#77C7F5', '#4FA8EC'];
            case 'RAINY-LIGHTNING':
                return ['#77C7F5', '#4FA8EC'];
            case 'SUNNY':
                return ['#F5AF19' ,'#F88711'];
            case 'PARTLY-CLOUDY':
                return ['#77C7F5', '#4FA8EC'];
            case 'LIGHTNING':
                return ['#77C7F5', '#4FA8EC'];
            case 'SNOWY':
                return ['#77C7F5', '#4FA8EC'];
            case 'WINDY':
                return ['#77C7F5', '#4FA8EC'];
        }
    }

    render() {
        return (
            <LinearGradient
                style={{ flex: 1, padding: 25, justifyContent: 'space-between' }}
                colors={this.getBackgroundColors()}>
                <StatusBar
                    hidden
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.30)" />
                <View>
                    <Text h4 style={{ color: 'white', fontSize: 50 }}>{this.state.city}</Text>
                    <Text h4 style={{ color: 'white', fontSize: 14, fontWeight: '100', letterSpacing: 4 }}>{this.state.state.toUpperCase()}</Text>
                </View>
                <View>
                    <Text h4 style={{ color: 'white', fontSize: 100 }}>{this.state.temperature + '°'}</Text>
                    <Text h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold', letterSpacing: 4 }}>{this.state.weather.toUpperCase()}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <WeatherIcon temperature='11' weather='CLOUDY' time='2 am' />
                    <WeatherIcon temperature='11' weather='CLOUDY' time='3 am' />
                    <WeatherIcon temperature='11' weather='LIGHTNING' time='4 am' />
                    <WeatherIcon temperature='11' weather='RAINY-LIGHTNING' time='5 am' />
                    <WeatherIcon temperature='12' weather='RAINY-LIGHTNING' time='6 am' />
                    <WeatherIcon temperature='12' weather='RAINY' time='7 am' />
                </View>
            </LinearGradient>
        );
    }
}