import React, { Component } from 'react'
import {Text,View} from 'react-native';
import {Header, Icon, Button, Item, Input} from 'native-base';
import PokeLoader from './PokeLoader'
import SearchBody from './SearchBody';
import axios from 'axios';

export default class Search extends Component {
    state={
        pokeSearch: '',
        onCall: true,
        data: {}
    }

    searchPoke = () => {
        this.setState({onCall: true});
        var self = this;
        axios.get('https://pokeapi.co/api/v2/pokemon/'+ self.state.pokeSearch.toLowerCase())
        .then(res => {
            self.setState({data: res.data});
            self.setState({onCall: false});
        })
        .catch(err => {
            self.setState({onCall: true});
        })
    }

    renderBody = () => {
        if(this.state.onCall){
            return(
                <PokeLoader/>
            )
        }else{
            return(
                <SearchBody data={this.state.data}/>
            )
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header rounded={true} searchBar={true} >
                    <Item>
                        <Icon name='ios-search' onPress={this.searchPoke}/>
                        <Input value={this.state.pokeSearch} placeholder='search pokemon'
                            onChangeText={(pokeSearch) => this.setState({pokeSearch})}
                        ></Input>
                    </Item>
                </Header>
                {this.renderBody()}
            </View>
        )
    }
}
