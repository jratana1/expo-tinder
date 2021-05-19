import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/Card'
import {useState, useEffect} from 'react'

import Swiper from 'react-native-deck-swiper'
// import { BASE_URL } from '../App'
const BASE_URL = "http://db3f80c3f4e2.ngrok.io";

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
        console.log(res)
      })
    }
    , [])
  


  return (
  <SafeAreaView style={styles.container}> 
    { restList.length > 0 ? <Swiper 
          cards={restList} 
          renderCard={Card} 
          infinite 
          backgroundColor="white" 
          cardHorizontalMargin={0} 
          cardVerticalMargin={0} 
          stackSize={2}/> : null}
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

// () => {fetch('https://api.yelp.com/v3/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer w6qa8__4fH9T6fuiTpxA09hBfrKhosMvhe9N4EVtpZ6GaqJpTTasxnDkgApBCtGUGbiO9VinV1x4nU9VhVeMLepRZa1CZdHpK-o33NtvPj2LsFag44iGgPMqkx6eX3Yx`
//   },
//   body: JSON.stringify({
//     query: `
//         query GetRest{
//   search(term: "burrito", location: "philly") {
//     business {
//       id
//       name
//       location {
//         address1
//         city
//         state
//         postal_code
//       }
//       photos
//     }
//   }
// }`

//   }),
// })
//   .then((res) => res.json())
//   .then((result) => {
//         setRestList(result.data.search.business)
//     })}