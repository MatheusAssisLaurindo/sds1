import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import {
  Play_700Bold,
  Play_400Regular,
} from '@expo-google-fonts/play';
import { useFonts } from 'expo-font';

import Routes from './src/routes';

export default function App() {  
  const [fontsLoaded] = useFonts({
    Play_700Bold,
    Play_400Regular,
  });

  if (!fontsLoaded){
    return<AppLoading />
  } else{
    return (
      <View style={styles.container}>
        <Routes />
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
