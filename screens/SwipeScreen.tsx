import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/Card'
import {useState, useEffect} from 'react'

import Swiper from 'react-native-deck-swiper'

export default function SwipeScreen() {
const [restList, setRestList] =useState<any>([])

useEffect(
    () => {fetch('https://api.yelp.com/v3/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer w6qa8__4fH9T6fuiTpxA09hBfrKhosMvhe9N4EVtpZ6GaqJpTTasxnDkgApBCtGUGbiO9VinV1x4nU9VhVeMLepRZa1CZdHpK-o33NtvPj2LsFag44iGgPMqkx6eX3Yx`
      },
      body: JSON.stringify({
        query: `
            query GetRest{
      search(term: "burrito", location: "philly") {
        business {
          id
          name
          location {
            address1
            city
            state
            postal_code
          }
          photos
        }
      }
    }`
    
      }),
    })
      .then((res) => res.json())
      .then((result) => {
            setRestList(result.data.search.business)
            console.log(restList)

    
        })}
      , []
    )
  


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
//       display_phone
//       location {
//         address1
//         address2
//         address3
//         city
//         state
//         postal_code
//         formatted_address
//       }

//       categories {
//         title
//         alias
//       }
//       photos
//     }
//   }
// }`