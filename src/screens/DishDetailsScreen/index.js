import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../components/common/BackIcon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DishItem from '../../components/Restaurant/DishItem';

const DishDetailsScreen = ({route, navigation}) => {
  console.log(route.params.item);
  const {item} = route.params;
  const [counter, setCounter] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1 * item.price);

  const handleCounter = type => {
    if (type === 'increment') {
      const newCounter = counter + 1;
      const newPrice = newCounter * item.price;
      setTotalPrice(newPrice.toFixed(2));
      setCounter(newCounter);
    } else {
      if (counter > 1) {
        const newCounter = counter - 1;
        const newPrice = newCounter * item.price;
        setTotalPrice(newPrice.toFixed(2));
        setCounter(newCounter);
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.description}</Text>
        </View>
        <View style={styles.counterContainer}>
          <AntDesign
            size={60}
            color="black"
            name="minuscircleo"
            onPress={() => handleCounter('decrement')}
          />
          <Text style={styles.counterText}>{counter}</Text>

          <AntDesign
            size={60}
            color="black"
            name="pluscircleo"
            onPress={() => handleCounter('increment')}
          />
        </View>
        <Pressable
          style={{marginTop: 'auto'}}
          onPress={() => navigation.navigate('Busket', {item})}>
          <View style={styles.addToBusketBtn}>
            <Text style={styles.btnText}>Add {counter} to Busket</Text>
            <Text style={styles.btnText}>{totalPrice} $</Text>
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
  },
  infoContainer: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#a5a1a1',
    marginVertical: 20,
  },
  addToBusketBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default DishDetailsScreen;
