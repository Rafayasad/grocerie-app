import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, TextInput,StyleSheet, ScrollView } from 'react-native';
import { Button, List ,IconButton, Colors, Divider  } from 'react-native-paper';
// import { blue100 } from "react-native-paper/lib/typescript/styles/colors";

export default function Sell ({navigation}){
    const [text, onChangeText] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const [selectColor,setSelectColor] = React.useState(0);
    const [selectTagsColor,setSelectTagsColor] = React.useState(0);
    return(
        // <Text>sell</Text>
        <View>
          <ScrollView>
        <View style={{padding:'5%',flexDirection:"row-reverse",justifyContent:"space-around"}}>
        <Button mode="contained" color={selectColor == 1 && Colors.blue100} style={{width:'40%'}} theme={{roundness:50}} onPress={() =>{
          setSelectColor(1);
        } }>
            Small
        </Button>
        <Button mode="contained" color={selectColor == 2 && Colors.blue100} style={{width:'40%'}} theme={{roundness:50}} onPress={() => {
          setSelectColor(2);
        }}>
            Medium
        </Button>
        </View>
        <View style={{padding:'5%',flexDirection:"row-reverse",justifyContent:"space-around"}}>
        <Button mode="contained" color={selectColor == 3 && Colors.blue100} style={{width:'40%'}} theme={{roundness:50}} onPress={() => {
          setSelectColor(3);
        }}>
            ExtraLarge
        </Button>
        <Button mode="contained" color={selectColor == 4 && Colors.blue100} style={{width:'40%'}} theme={{roundness:50}} onPress={() => {
          setSelectColor(4);
        }}>
            Large
        </Button>
        </View>
        <View style={{padding:30,justifyContent:"center"}}>
            <Text>
                Height : 
            </Text>
            <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={{backgroundColor:'blue',height:47.8 ,padding:13,width:'15%',borderBottomRightRadius:10,borderTopRightRadius:10,marginLeft:'76%',marginTop:"-9%",position:"absolute"}}>
          <Text style={{color:'white'}}>CM</Text>
      </View>
      
    </SafeAreaView>

    <Text>{'\n'}</Text>
    
    <Text>
                Width : 
            </Text>
            <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
      />
      <View style={{backgroundColor:'blue',height:47.8 ,padding:13,width:'15%',borderBottomRightRadius:10,borderTopRightRadius:10,marginLeft:'76%',marginTop:"-9%",position:"absolute"}}>
          <Text style={{color:'white'}}>CM</Text>
      </View>
      
    </SafeAreaView>
        </View>
        <View style={{padding:25,marginTop:-35}}>
          <Text style={{color:'blue',fontSize:20,fontWeight:'bold'}}>Tags</Text>
          <View style={{flexDirection:"row-reverse",justifyContent:'center',marginTop:10}}>
            <Button mode="contained" color={selectTagsColor == 1 && Colors.blue100} style={{width:'40%',borderBottomRightRadius:10,borderTopRightRadius:10}} theme={{roundness:1}} onPress={() => {
              setSelectTagsColor(1);
            }}>
              No
            </Button>
            <Button mode="contained" color={selectTagsColor == 2 && Colors.blue100} style={{width:'40%',borderBottomLeftRadius:10,borderTopLeftRadius:10}} theme={{roundness:1}} onPress={() => {
              setSelectTagsColor(2);
            }}>
              yes
            </Button>
          </View>
        </View>

        <View style={{padding:15,marginTop:-15}}>
        <List.Item
        style={{padding:5}}
        title="Category"
        onPress={()=>{console.log('pressed')}}
        right={props => <List.Icon {...props} icon={require('../../assets/plus.png')} color={Colors.blue600} />}
        />
        <List.Item
        style={{padding:5}}
        title="Brand"
        onPress={()=>{console.log('pressed')}}
        right={props => <List.Icon {...props} icon={require('../../assets/plus.png')} color={Colors.blue600} />}
        />
        <List.Item
        style={{padding:5}}
        title="Color"
        onPress={()=>{console.log('pressed')}}
        right={props => <List.Icon {...props} icon={require('../../assets/plus.png')} color={Colors.blue600} />}
        />
        </View>
        </ScrollView>
        <Divider />
        <View style={{flexDirection:'row-reverse',justifyContent:'space-around',marginTop:10}}>
          <Button  mode="contained" style={{width:'40%'}} theme={{roundness:50}} onPress={() => navigation.navigate('Size')}>
            next
          </Button>
          <Button disabled mode="contained" style={{width:'40%'}} theme={{roundness:50}} onPress={() => console.log('Pressed')}>
            previous
          </Button>
        </View>
        <View style={{flexDirection:'row-reverse',justifyContent:'center',marginTop:15}}>
          <View style={{height:10,width:10,backgroundColor:'lightgrey',borderRadius:50,marginLeft:5}}></View>
          <View style={{height:10,width:10,backgroundColor:'lightgrey',borderRadius:50,marginLeft:5}}></View>
          <View style={{height:10,width:10,backgroundColor:'blue',borderRadius:50}}></View>
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
      height: 45,
      width:170,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginLeft:"20%",
      marginTop:'-9%',
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10
    //   borderRadius:10
    },
  });