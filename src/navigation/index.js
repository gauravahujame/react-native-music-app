import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { PlayerScreen, PlaylistScreen } from '../screens';

export default createStackNavigator(
    {
        Playlist: PlaylistScreen,
        Player: PlayerScreen,
    },
    {
        headerMode: 'none'
    }
);
