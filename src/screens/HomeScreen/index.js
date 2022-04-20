import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import React from 'react';
import RestaurentItem from '../../components/HomeScreen/RestaurentItem';
import data from '../../assets/data/restaurants.json';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RestaurentItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
