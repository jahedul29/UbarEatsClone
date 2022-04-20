import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const RestaurantHeader = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>
        ${item.deliveryFee} &#8226; {item.minDeliveryTime} -{' '}
        {item.maxDeliveryTime}
      </Text>
      <Text style={styles.menuText}>Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: 'black',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#a5a1a1',
    paddingHorizontal: 10,
    marginVertical: 10,
    fontWeight: '800',
  },
  menuText: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'black',
    fontWeight: '500',
    marginBottom: 20,
  },
});

export default RestaurantHeader;
