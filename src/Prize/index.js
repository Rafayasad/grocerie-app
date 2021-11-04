import React from "react";
import { Text , View, ScrollView } from "react-native";
import { Divider, Button } from "react-native-paper";

export default function Prize({navigation}){
    return(
        <>
        <View>
            <ScrollView>
            <Text style={{textAlign:'center'}}> PRIZE SCREEN </Text>
            </ScrollView>
        </View>
        <View style={{justifyContent:'flex-end',flex:1,position:'relative',top:-25}}>
            <View style={{}}>
            <Divider />
        <View style={{flexDirection:'row-reverse',justifyContent:'space-around',marginTop:10}}>
          <Button disabled mode="contained" style={{width:'40%'}} theme={{roundness:50}} onPress={() => console.log('PRESSED')}>
            next
          </Button>
          <Button mode="contained" style={{width:'40%'}} theme={{roundness:50}} onPress={() => navigation.navigate('Size')}>
            previous
          </Button>
        </View>
        <View style={{flexDirection:'row-reverse',justifyContent:'center',marginTop:15}}>
          <View style={{height:10,width:10,backgroundColor:'blue',borderRadius:50,marginLeft:5}}></View>
          <View style={{height:10,width:10,backgroundColor:'lightgrey',borderRadius:50,marginLeft:5}}></View>
          <View style={{height:10,width:10,backgroundColor:'lightgrey',borderRadius:50}}></View>
        </View>
            </View>
        </View>
        </>
    )
}