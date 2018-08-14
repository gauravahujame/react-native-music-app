import React from 'react';
import { View, StatusBar, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';


export default class PlayerScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            artist: 'Adele',
            playlist: [
                'Hello',
                'Chasing Pavements',
                'Rolling in the Deep',
            ],
            activeIndex: 2,
            activeTitle: 'Rolling in the Deep',
            accentColor: '#FF5252',
            shuffle: false,
            repeat: true,
            playing: true,
            menuVisible: false,
        }
    }

    render() {
        const { accentColor, activeIndex, activeTitle, artist, playing, shuffle, repeat, menuVisible } = this.state;
        const { navigation } = this.props;
        return (
            <View
                style={{ flex: 1, justifyContent: 'space-between' }}>
                <StatusBar
                    hidden
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.30)" />
                <ImageBackground
                    source={(require('../../images/album_art.jpg'))}
                    style={{ flex: 5 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            if(menuVisible) {
                                this.setState({ menuVisible: false })
                            }
                        }}
                        backgroundColor='#00000099'
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            padding: 12
                        }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}>
                                <Icon
                                    name='chevron-left'
                                    type='material-community'
                                    color='white'
                                    size={42} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ menuVisible: !menuVisible })}>
                                <Icon
                                    name='dots-horizontal'
                                    type='material-community'
                                    color='white'
                                    size={42} />
                            </TouchableOpacity>
                        </View>
                        {menuVisible && (
                            <View style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'white', borderRadius: 5, paddingHorizontal: 50 }}>
                                <Text style={{ paddingVertical: 10 }}>Share</Text>
                                <Text style={{ paddingVertical: 10 }}>Remove</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </ImageBackground>
                <View
                    style={{ flex: 1, flexDirection: 'row', backgroundColor: 'black', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        onPress={() => this.setState({ shuffle: !shuffle })}>
                        <Icon
                            name='shuffle'
                            type='material-community'
                            color={shuffle ? accentColor : 'white'}
                            size={22} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => null}>
                        <Icon
                            name='skip-previous'
                            type='material-community'
                            color='white'
                            size={36} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ playing: !playing })}>
                        <Icon
                            name='play-circle-outline'
                            type='material-community'
                            color={playing ? accentColor : 'white'}
                            size={80} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => null}>
                        <Icon
                            name='skip-next'
                            type='material-community'
                            color='white'
                            size={36} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ repeat: !repeat })}>
                        <Icon
                            name='repeat'
                            type='material-community'
                            color={repeat ? accentColor : 'white'}
                            size={22} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}