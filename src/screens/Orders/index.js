import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import orders from '../../assets/data/orders.json';
import OrderItem from '../../components/Orders/OrderItem';
import BackIcon from '../../components/common/BackIcon';

const Orders = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={orders}
        renderItem={({item}) => <OrderItem item={item} />}
        ListHeaderComponent={() => {
          return (
            <View style={styles.pageHeader}>
              <Text style={styles.pageHeaderText}>Your Orders</Text>
            </View>
          );
        }}
      />
      <BackIcon navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  pageHeaderText: {
    color: 'black',
    fontSize: 27,
    fontWeight: '700',
  },
});

export default Orders;
