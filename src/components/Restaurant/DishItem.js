import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {deviceWidth} from '../../utils';

const DishItem = ({item, navigation}) => {
  console.log(item);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('DishDetails', {
          item,
        })
      }>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.description}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
        {item.image && (
          <Image source={{uri: item.image}} style={styles.dishImage} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingBottom: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth - 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: '#a5a1a1',
    marginVertical: 10,
    fontWeight: '600',
  },
  price: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  dishImage: {
    aspectRatio: 1 / 1,
    borderRadius: 10,
    width: 100,
  },
});

export default DishItem;
