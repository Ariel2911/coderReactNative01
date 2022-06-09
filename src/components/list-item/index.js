import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import { styles } from './styles';

const ListItem = ({ item, onPress } ) => {
  const[ active, setActive ] = useState(false);
  const onHandleActive = () => {
    setActive(!active)
  }

  return (
    <View style={styles.itemList} key={item.id}>
      <Button 
        title='    ' 
        onPress={onHandleActive}
        color={active ? 'green' : 'transparent'} 
      />
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
