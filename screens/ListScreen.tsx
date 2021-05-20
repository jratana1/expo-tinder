import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {useState, useEffect} from 'react'

import Card from '../components/Card'

const BASE_URL = "http://53524d71a458.ngrok.io";


export default function ListScreen() {
  const[userRestArray, setUserRestArray] = useState<any>([])

  useEffect(
  () => {  
  fetch(BASE_URL+"/restaurants")
  .then(res => res.json())
  .then(res => {
    setUserRestArray(res)
    console.log(res)
  })
  }
 )

  const mapRestArraytoCards = () => {
    if (userRestArray && userRestArray.length) {
      return userRestArray.map((rest: any, index: number) => {
        return <Card photos={[rest.photos]}
                      name={rest.name}
                      location={{address1: rest.address, city: rest.city, state:rest.state, postal_code:rest.postal_code}}
                      key={`${index}`}></Card>
      })
    }
  }
  return (
    <View style={styles.container}>
        {mapRestArraytoCards()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
