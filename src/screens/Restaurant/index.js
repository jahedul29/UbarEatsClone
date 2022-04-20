import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import DishItem from '../../components/Restaurant/DishItem';
import RestaurantHeader from '../../components/Restaurant/RestaurantHeader';
import BackIcon from '../../components/common/BackIcon';

const Restaurant = ({route, navigation}) => {
  return (
    <View>
      <FlatList
        data={route.params.item.dishes}
        renderItem={({item}) => (
          <DishItem item={item} navigation={navigation} />
        )}
        ListHeaderComponent={() => (
          <RestaurantHeader item={route.params.item} navigation={navigation} />
        )}
      />
      <BackIcon navigation={navigation} />
    </View>
  );
};

export default Restaurant;
