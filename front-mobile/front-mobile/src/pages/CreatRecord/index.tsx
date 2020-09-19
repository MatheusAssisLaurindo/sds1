import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
    return (
        <>
            <Header/>
            <Text style={styles.text}>Hello creat-record!</Text>
        </>
    );

}

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 50,
      textAlign: "center",
      marginTop: 75
    }
  });
  
export default CreateRecord;