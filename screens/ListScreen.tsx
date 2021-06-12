import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { Text, View } from '../components/Themed';
import {useState, useEffect, useCallback} from 'react'
import Card from '../components/Card'

import { Tile } from 'react-native-elements'

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

    //   return (
    //   <SafeAreaView>
    //     <ScrollView>
    //       <Text h2 h2Style={styles.h2Style}>
    //         Top Picks
    //       </Text>
    //       <Text h4 h4Style={styles.h4Style}>
    //         Featured profiles of the day, picked just for you
    //       </Text>
    //       <View style={styles.grid}>
    //         {userRestArray.map((rest: any, index: number) => (
    //           <Tile
    //             imageSrc={{uri: rest.photos[0]}}
    //             activeOpacity={1.0}
    //             title={rest.name}
    //             titleStyle={styles.title}
    //             caption={<View style={{backgroundColor: 'rgba(52, 52, 52, 0.0)', position: 'absolute', left: 10, bottom: 10}}>
    //                       <Text style={styles.text}>{rest.location.address1}</Text>
    //                       <Text style={styles.text}>{rest.location.city}, {rest.location.state} {rest.location.postal_code}</Text>
    //                     </View>}
    //             captionStyle={styles.caption}
    //             featured
    //             key={rest.name}
    //           />
    //         ))}
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // )

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
  h2Style: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  h4Style: {
    textAlign: 'center',
    color: '#757575',
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 50,
    backgroundColor: 'black',
    marginBottom: -2,
    padding: 10,
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 0,
    backgroundColor: 'black',
    marginTop: 10,
    padding: 10,
  },
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight: 'bold',
    fontSize: 14,
    color: "white"
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
