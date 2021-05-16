import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed';

import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = 29 

const Card = (props: CardProps) => (
  <Tile
    imageSrc={{uri: props.pic}}
    imageContainerStyle={styles.imageContainer}
    activeOpacity={0.9}
    title={props.title}
    titleStyle={styles.title}
    caption={
      // props.caption
      <View style={{backgroundColor: 'rgba(52, 52, 52, 0.0)', position: 'absolute', left: 10,
      bottom: 10}}>
        <Text>{props.location.address1}</Text>
        <Text>{props.location.city}, {props.location.state} {props.location.postal_code}</Text>
      </View>
    }
    captionStyle={styles.caption}
    containerStyle={styles.container}
    featured
  />

)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      width: Layout.window.width - 30,
      height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
      borderRadius: 20,
      overflow: 'hidden', // this does magic
    },
    title: {
      position: 'absolute',
      left: 10,
      bottom: 30,
    },
    caption: {
      position: 'absolute',
      left: 10,
      bottom: 10,
    },
  })

  type CardProps = {
    pic: string;
    title: string;
    location: any;
  };

  export default Card
  