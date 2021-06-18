import React from 'react'
import { Text, StyleSheet, Image,  StatusBar, Dimensions, ScrollView } from 'react-native'

import { globalStyles } from '../../utils/globalStyles'


export default function Blog({ route }) {

   const { title, content, coverImage } = route.params.blogData

   return (
      <ScrollView style={globalStyles.primaryContainer}>
         <StatusBar hidden />
         {
            coverImage ?
            <Image 
               style={styles.image}
               source={{ uri: coverImage }}
            />
            : null
         }
         <Text
            style={{
               ...globalStyles.headingText,
               textAlign: 'center',
               margin: 10
            }}
         >{title}</Text>
         <Text style={styles.content}>{content}</Text>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   image: {
      width: Dimensions.get('screen').width,
      height: 200
   },
   content: {
      ...globalStyles.secondaryText,
      flex: 1,  
      flexWrap: 'wrap',
      marginHorizontal: 10
   }
})