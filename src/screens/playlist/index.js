import React from 'react';
import { View, StatusBar, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

export default class PlaylistScreen extends React.Component {
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
                'Send my Love',
                'Someone Like You',
            ],
            activeIndex: 2,
            activeTitle: 'Rolling in the Deep',
            accentColor: '#FF5252',
            playing: false,
            menuVisible: false,
        }
    }

    render() {
        const { accentColor, activeIndex, activeTitle, artist, playing, menuVisible } = this.state;
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
                    style={{ flex: 3 }}>
                    <View
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
                    </View>
                </ImageBackground>
                <LinearGradient
                    colors={['#000', '#0B171E']}
                    style={{ flex: 6, alignItems: 'center' }}>
                    <Image
                        style={{ width: 120, height: 120, top: -60, borderRadius: 160, borderColor: 'white', borderWidth: 3 }}
                        source={require('../../images/album_art.jpg')} />
                    <Text style={{ fontSize: 16, color: 'white', letterSpacing: 3, top: -40 }}>{this.state.artist}</Text>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.playlist}
                        style={{ flex: 1, width: '90%', backgroundColor: 'transparent' }}
                        renderItem={({ item, index }) => (
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16 }}>
                                <Text style={{ color: (index === activeIndex ? accentColor : 'white') }}>{index + 1}</Text>
                                <Text style={{ color: (index === activeIndex ? accentColor : 'white') }}>{item}</Text>
                                <Icon
                                    name='play'
                                    type='material-community'
                                    color={index === activeIndex ? accentColor : 'white'}
                                    size={28} />
                            </View>
                        )} />
                </LinearGradient>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Player')}
                    activeOpacity={1}
                    style={{ flex: 1, flexDirection: 'row', backgroundColor: accentColor, alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image
                        source={require('../../images/album_art.jpg')}
                        style={{ height: 42, width: 42, borderRadius: 120 }} />
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 2 }}>{activeTitle}</Text>
                        <Text style={{ color: 'white', fontWeight: '100', letterSpacing: 2 }}>{artist}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.setState({ playing: !playing })}>
                        <Icon
                            name={playing ? 'play' : 'pause'}
                            type='material-community'
                            color='white'
                            size={28} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    }
}