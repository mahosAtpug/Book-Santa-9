import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity ,Dimensions} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../component/MyHeader';
import {SwipeListView} from "react-native-swipe-list-view"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

export default class SwipeableFlatList extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Swipeable FlatList
                </Text>
            </View>
        )
    }
}