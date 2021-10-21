import React, { Component } from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'

export default class Splash extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.replace('Home')
        }, 3000)
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/logo.png')}/>
                <Text
                    style={{
                        fontSize:20,
                        fontWeight: 'bold'
                    }}>Omah.com</Text>
                <Text
                    style={{
                        fontSize:14,
                        position: 'absolute',
                        bottom:10
                    }}>version 1.0</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({})
