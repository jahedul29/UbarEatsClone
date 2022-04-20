import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RestaurentItem = ({item, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('Restaurant', {item})}>
      <View style={styles.dishItemContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>
              ${item.deliveryFee} &#8226; {item.minDeliveryTime} -{' '}
              {item.maxDeliveryTime}
            </Text>
          </View>
          <View style={styles.rating}>
            <Text>{item.rating}</Text>
            <AntDesign
              name="star"
              size={14}
              color="#fb8e8e"
              style={{marginLeft: 3}}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dishItemContainer: {
    padding: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    borderRadius: 5,
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#a5a1a1',
    fontWeight: '800',
  },
});

export default RestaurentItem;
