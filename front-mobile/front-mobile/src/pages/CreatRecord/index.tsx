import React, { useState, useEffect } from 'react';
import{FontAwesome5 as Icon} from '@expo/vector-icons'
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native';
import Header from '../../components/Header';
import PlatformCard from './PlatformCard';
import { GamePlatform, Game } from './types';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import {RectButton} from 'react-native-gesture-handler';

const placeholder={
  label: 'Selecione o game',
  value: null
}

const BASE_URL = 'https://sds1-matheuss.herokuapp.com';

const mapSelectValues= (games: Game[]) => {
  return games.map(game => ({
    ...game,
    label: game.title,
    value: game.id
  }));
}

const CreateRecord = () => {

  const [name, setName] = useState ('');
  const [age, setAge] = useState ('');
  const [platform, setPlatform] = useState<GamePlatform>();
  const[selectedGame, setSelectGame] = useState('');
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [filteredGames, setfilteredGames] = useState<Games[]>([]);

  const handleChangePlatform = (selectdPlatform: GamePlatform) =>{
    setPlatform(selectdPlatform);
    const gamesByPlatform= allGames.filter(
      game => game.platform === selectdPlatform
    )
    setfilteredGames(gamesByPlatform);
  }

  const handleSubmit= () =>{
    const payload = { name, age, gameId:selectedGame };

    axios.post(`${BASE_URL}/records`, payload)
      .then (() => {
        Alert.alert('Dados salvos com sucesso!!');
        setName('');
        setAge('');
        setSelectGame('');
        setPlatform(undefined);
      })
      .catch (() => Alert.alert('Erro ao salvar informações!'))
  }

  useEffect(() =>{
    axios.get(`${BASE_URL}/games`)
      .then(response => {
        const SelectValues = mapSelectValues(response.data);
        console.log(SelectValues);

        setAllGames(SelectValues);
      })
      .catch (() => Alert.alert('Erro ao listar os jogos!'))
  }, []);

    return (
        <>
            <Header/>
            <View style={styles.container}>
              <TextInput 
              style={styles.inputText}
              placeholder="Nome"
              placeholderTextColor="#9e9e9e"
              onChangeText = { text => setName (text)}
              value={name}
              />
              <TextInput 
              keyboardType="numeric"
              style={styles.inputText}
              placeholder="Idade"
              placeholderTextColor="#9e9e9e"
              maxLength={3}
              onChangeText = { text => setAge (text)}
              value={age}
              />
              <View style={styles.platformContainer}>
              <PlatformCard 
              platform="PC"
              icon="laptop"
              onChange={handleChangePlatform}
              activePlatform={platform}
              />
              <PlatformCard 
              platform="XBOX"
              icon="xbox"
              onChange={handleChangePlatform}
              activePlatform={platform}
              />
              
              <PlatformCard 
              platform="PLAYSTATION"
              icon="playstation"
              onChange={handleChangePlatform}
              activePlatform={platform}
              />
            </View>
            <RNPickerSelect
            onValueChange={value =>{
              setSelectGame(value);
            }} 
            placeholder={placeholder} 
            value={selectedGame}
            items={filteredGames}
            style={pickerSelectStyles}
            Icon={() => {
              return <Icon name="chevron-down" color="#DC143C" size={25}/>
            }}
           />
            <View style={styles.footer}>
              <RectButton style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                  SALVAR
                </Text>
              </RectButton>
            </View>

         </View>
        </>
      );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#DC143C',
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#DC143C',
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50
  },
  placeholder: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: "Play_700Bold",
  },
  iconContainer: {
    top: 10,
    right: 12,
  }
})

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingBottom: 50
  },
  inputText: {
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#DC143C',
    fontFamily: "Play_700Bold",
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 21
  },
  platformContainer: {
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    marginTop: '15%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00D4FF',
    flexDirection: 'row',
    borderRadius: 10,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: "Play_700Bold",
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0B1F34',
  }
});
  
export default CreateRecord;