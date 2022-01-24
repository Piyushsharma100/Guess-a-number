/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.overText}>The Game Over</Text>
      <Text style={styles.gameRound}>Number of rounds:{props.roundsNumber}</Text>
      <Text style={styles.wasNumber} >Number was:{props.userNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#FFFDE4"
  },
  overText:{
    fontSize:30,
    color:'black',

  },
  gameRound:{
    fontSize:20,
    color:'green',

  },
  wasNumber:{
    color:"#f7287b",
    fontSize:20,
  },
});
export default GameOverScreen;
