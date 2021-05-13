import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://api.yelp.com/v3/graphql',
//   headers: {
//     "Authorization": `Bearer w6qa8__4fH9T6fuiTpxA09hBfrKhosMvhe9N4EVtpZ6GaqJpTTasxnDkgApBCtGUGbiO9VinV1x4nU9VhVeMLepRZa1CZdHpK-o33NtvPj2LsFag44iGgPMqkx6eX3Yx`,
//     "Content-type": "application/json",
//   },
//   cache: new InMemoryCache()
// });

// const GET_REST = gql
// `query GetRest{
//   search(term: "burrito", location: "philly") {
//     total
//     business {
//       id
//       name
//       location {
//         address1
//       }
//     }
//   }
// }`

// fetch('https://api.yelp.com/v3/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer w6qa8__4fH9T6fuiTpxA09hBfrKhosMvhe9N4EVtpZ6GaqJpTTasxnDkgApBCtGUGbiO9VinV1x4nU9VhVeMLepRZa1CZdHpK-o33NtvPj2LsFag44iGgPMqkx6eX3Yx`
//   },
//   body: JSON.stringify({
//     query: `
//         query GetRest{
//   search(term: "burrito", location: "philly") {
//     total
//     business {
//       name
//       location {
//         address1
//       }
//     }
//   }
// }`

//   }),
// })
//   .then((res) => res.json())
//   .then((result) => console.log(result));


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
