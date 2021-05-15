import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = 29 

const Card = (props: CardProps) => (
  <Tile
    imageSrc={props.pic}
    imageContainerStyle={styles.imageContainer}
    activeOpacity={0.9}
    title={props.title}
    titleStyle={styles.title}
    caption={props.caption}
    captionStyle={styles.caption}
    containerStyle={styles.container}
    featured
  />
)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
    caption:string;
  };

  export default Card
  