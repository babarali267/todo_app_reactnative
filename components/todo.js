import React from 'react';

import { View,Text,StyleSheet, TouchableOpacity } from "react-native"

export const Todo =({item,delTask,index})=>{
    return(<>
     <View style={styles.items}>
        <Text style={styles.text}>
            {item}
            </Text>
       <TouchableOpacity onPress={()=> delTask(index)}>
       <View style={styles.circle}>Delete</View>
       </TouchableOpacity>
     </View>
    
    </>)
}

const styles = StyleSheet.create({
    items:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        margin:20,
        backgroundColor:'#fff',
        height:30,
        padding:15,
        fontSize:25,
    },
    
    text:{
        color:'green',
        fontSize:25,

    },
    circle:{
        padding:15,
        backgroundColor:'red',
        cursor: 'pointer',
        color:'#fff'
        
    }
    
})