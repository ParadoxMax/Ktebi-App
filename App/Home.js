import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Demander from './Demander';
import Deposer from './Deposer';
 export default class Home extends React.Component {

    render() {
        return (
        <View style={styles.container}>
            <Image source={require('../images/ktebi1.png')} style={styles.logo} />
            <View style={styles.buttonsBox}>
              <TouchableOpacity style={styles.desposingButton} onPress={() => this.props.navigation.navigate('Deposer')}>
                <Text style={styles.desposingButtonText}>
                Déposer un livre
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.receivingButton} onPress={() => this.props.navigation.navigate('Demander')}>
                <Text style={styles.receivingButtonText}>
                Trouver un livre
                </Text>
              </TouchableOpacity>
            </View>
        </View>

            );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logo:{
        top: "20%",
        right: "20%",
        alignContent: 'center',
        justifyContent: 'center',
        width: 500,
        height: 500,
    },
    buttonsBox:{
        zIndex:11,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        padding: 50,
    },
    desposingButton:{
        backgroundColor: '#E58',
        position: 'absolute',
        zIndex: 11,
        padding: 10,
        margin: -20,
        top: "35%",
        bottom: "70%",
        width: 210,
        height: 60,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:25,
    },
    desposingButtonText:{
        color: 'white',
        fontSize: 20,
    },
    receivingButton:{
        backgroundColor: '#2E8',
        position: 'absolute',
        zIndex: 11,
        padding: 10,
        margin: 50,
        top: "20%",
        bottom: "55%",
        width: 210,
        height: 60,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:25,
    },
    receivingButtonText: {
        color: 'white',
        fontSize: 20,
    },
}
    
)
