import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/Card'
import {useState, useEffect} from 'react'

import Swiper from 'react-native-deck-swiper'
// import { BASE_URL } from '../App'
const BASE_URL = "http://cd2ed39be702.ngrok.io";

export default function SwipeScreen() {
const [restList, setRestList] =useState<any>([])


useEffect(
    () => {
      let config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // Authorization: `Bearer ${sessionStorage.token}`
      },
      body: JSON.stringify({term: "burrito", location: "philly"})
  }

  fetch(BASE_URL+"/swipe", config)
      .then(res => res.json())
      .then(res => {
        setRestList(res)
      })
    }
    , [])
  
    const swipeRight = (index: number) => {

      let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // Authorization: `Bearer ${sessionStorage.token}`
        },
        body: JSON.stringify({restaurant: restList[index]})
    }

    fetch(BASE_URL+"/swiperight", config)
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
  }
  

  return (
  <SafeAreaView style={styles.container}> 
    { restList.length > 0 ? <Swiper 
          cards={restList} 
          renderCard={Card} 
          infinite 
          backgroundColor="white" 
          cardHorizontalMargin={0} 
          cardVerticalMargin={0} 
          stackSize={2}
          onSwipedRight={(index) => swipeRight(index)}/>
          : null
          }
  </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

