import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackIcon = ({navigation, color = 'black'}) => {
  return (
    <Ionicons
      name="arrow-back"
      size={40}
      color={color}
      style={styles.backIcon}
      onPress={() => navigation.goBack()}
    />
  );
};

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 10,
    left: 10,
  },
});

export default BackIcon;
