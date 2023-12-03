import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const UserScreen = () => {
    return (
        <View style={styles.viewStyle}>
         <Text style={styles.textStyle}>This is User Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{ 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    textStyle:{
        fontSize:28,
        color:'black'

    },

})

export default UserScreen;
