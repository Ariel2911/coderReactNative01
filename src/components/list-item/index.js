import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const ListItem = ({ item, onPress } ) => {
  // console.warn(item);
  return (
    <View style={styles.itemList} key={item.id}>
      <Text>{item.value}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onPress(item.id)}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
