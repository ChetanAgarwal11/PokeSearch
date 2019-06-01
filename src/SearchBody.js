import React, { Component } from 'react'
import {ScrollView, Text, View, ImageBackground, Image, Dimensions, FlatList} from 'react-native';
import {ListItem} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default class SearchBody extends Component {

    renderItem = ({item}) => (
        <ListItem>
            <Text>{item.ability.name}</Text>
        </ListItem>
    )

    render() {
        var pokemon = this.props.data;
        if(!pokemon){
            return <Text>No data</Text>
        }
        return (
            <ImageBackground style={{flex:1, height: height, width: width}} source={{uri: 'https://pokemongolive.com/img/posts/raids_loading.png'}}>
                <ScrollView style={{flex: 1}}>
                    <Text style={{fontSize: 30, color: 'red', textAlign: 'center'}}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                        <Image source={{uri: pokemon.sprites.front_default}} style={{height: 200, width: 200 ,justifyContent: 'center', alignItems: 'center'}}/>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'white', opacity: 0.8}}>
                        <ListItem itemDivider >
                            <Text style={{fontWeight: 'bold'}}>Size</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Weight - {pokemon.weight}kg</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Height - {pokemon.height/10}m</Text>
                        </ListItem>
                        <ListItem itemDivider >
                            <Text style={{fontWeight: 'bold'}}>Abilities</Text>
                        </ListItem>
                        <FlatList data={pokemon.abilities} renderItem= {this.renderItem} keyExtractor={(item, index) => index.toString()}>
                        </FlatList>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
