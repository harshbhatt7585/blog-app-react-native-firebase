import React from 'react'
import { View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Dimensions, Image, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { globalStyles } from '../utils/globalStyles'


export default function BlogCard({ blogData, onModalOpen, moveToBlogScreen }) {

   const { title, coverImage } = blogData

   return(
      <TouchableOpacity
         style={styles.container}
         onPress={() => moveToBlogScreen(blogData)}
      >
         <TouchableWithoutFeedback>
            <Ionicons 
               name='ios-ellipsis-vertical-circle'
               size={32}
               color='white'
               style={{ 
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  zIndex: 1,
                }}
               onPress={() => onModalOpen(blogData.id)}
            />
         </TouchableWithoutFeedback>

         <View style={styles.card}>
            <Image 
               style={styles.image}
               source={{ uri: coverImage }}
            />
            <Text style={styles.cardTitle}>{title}</Text>
         </View>
      </TouchableOpacity>
   )

   return (
      <View>
         
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: Dimensions.get('screen').width/1.25,
      backgroundColor: 'white',
      height: 200,
      marginVertical: 10,
   },
   card: {
      height: '100%',
      width: '100%',
      
   },
   image: {
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
   },
   cardTitle: {
      ...globalStyles.primaryText,
      color: 'white',
      padding: 10,
      fontSize: 26,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7,
      backgroundColor: 'rgba(0,0,0,0.81)',
      position: 'absolute',
      bottom: 0,
      width: '100%'
   },
})
