import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { Text, View } from '../components/Themed';
import {useState, useEffect, useCallback} from 'react'
import Card from '../components/Card'

const BASE_URL = "http://cd2ed39be702.ngrok.io";


export default function ListScreen() {
  const[userRestArray, setUserRestArray] = useState<any>([])


 useFocusEffect(
  useCallback(() => {
    let isActive = true;

    const fetchList = async () => {
      try {
        const res = await fetch(BASE_URL+"/restaurants")
                          .then(res => res.json())

        if (isActive) {
          setUserRestArray(res)
        }
      } catch (e) {
        // Handle error
      }
    };

    fetchList();

    return () => {
      isActive = false;
    };
  }, [])
);

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
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
        {mapRestArraytoCards()}
    </View>
    </ScrollView>
    </SafeAreaView>

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
