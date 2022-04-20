import { View, Text, SafeAreaView, StyleSheet, Pressable, Platform } from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../components/common/BackIcon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import data from '../../assets/data/restaurants.json';

const Busket = ({route, navigation}) => {
  const [totalPrice, setTotalPrice] = useState(100);
  // const restaurantName = route.params.item.name;
  const {item: restaurant} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data[1].name}</Text>
          <Text style={[styles.leadSubTitle, {marginBottom: 25}]}>
            Your Items
          </Text>

          {data[1]?.dishes?.map((item, index) => {
            return (
              <View style={styles.itemContainer}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  <Text style={[styles.leadSubTitle, {marginRight: 10}]}>
                    {index + 1}
                  </Text>
                  <Text style={styles.leadSubTitle}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.subtitle}>{item.price} $</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.subtitle}>Subtotal</Text>
          <Text style={styles.subtitle}>$100</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.subtitle}>Total</Text>
          <Text style={styles.subtitle}>$100</Text>
        </View>

        <Pressable
          style={{marginTop: 'auto'}}
          onPress={() => navigation.navigate('Orders')}>
          <View style={styles.addToBusketBtn}>
            <Text style={styles.btnText}>Place Order for {totalPrice} $</Text>
          </View>
        </Pressable>
      </View>
      <BackIcon navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 50,
    marginBottom: Platform.OS === 'ios' ? 0 : 20,
  },
  infoContainer: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#a5a1a1',
  },
  leadSubTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  addToBusketBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'black',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  counterText: {
    color: 'black',
    marginHorizontal: 20,
    fontSize: 30,
    fontWeight: '700',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Busket;
