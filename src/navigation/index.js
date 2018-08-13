import { createSwitchNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { WeatherScreen } from '../screens';

export default TabNavigator(
    {
        Weather: WeatherScreen,
        Weather1: WeatherScreen,
        Weather2: WeatherScreen
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            
            showIcon: true,
            showLabel: false,
            style: {
                height: 0,
            }
        }
    }
);
