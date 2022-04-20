import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const OrderItem = ({item}) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <Image source={{uri: item.Restaurant.image}} style={styles.image} />
      <View style={{flex: 1}}>
        <Text style={styles.title} numberOfLines={1}>
          {item.Restaurant.name}
        </Text>
        <Text style={styles.subtitle}>Items &#8226; $38.45</Text>
        <Text style={styles.subtitle}>
          {item.createdAt} &#8226; {item.status}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  image: {
    width: 80,
    aspectRatio: 1 / 1,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#a5a1a1',
    fontWeight: '700',
    marginBottom: 8,
  },
});

export default OrderItem;
