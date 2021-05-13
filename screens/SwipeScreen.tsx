import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Card from '../components/Card'
import {useState, useEffect} from 'react'

export default function SwipeScreen() {
const [restList, setRestList] =useState([])

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
          display_phone
          location {
            address1
            address2
            address3
            city
            state
            postal_code
            formatted_address
          }

          categories {
            title
            alias
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
    <View style={styles.container}>
      <Text style={styles.title}>Testing</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/SwipeScreen.tsx" />
      {/* {restList && <Card pic={restList[0].photos[0]} title={restList[0].name} caption={restList[0].location.address1}></Card>} */}
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