import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import { styles } from './styles';

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([
    {
      id: 1,
      value: 'Buy some water',
    },
  ]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText = (text) => {
    setText(text);
  };
  const addItem = () => {
    if (text !== '') {
      setList((currentList) => [
        ...currentList,
        {
          id: Math.random().toString(),
          value: text,
        },
      ]);
      setText('');
    }
  };
  const onHandlerDelete = (id) => {
    setList((currentItems) => currentItems.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };
  const onHandlerModal = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemList} key={item.id}>
      <Text>{item.value}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onHandlerModal(item.id)}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  const keyExtractor = (item) => item.id.toString();
  // console.warn(list);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="new task"
          placeholderTextColor={'red'}
          style={styles.input}
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}
        />
        <Button title="ADD" onPress={() => addItem()} color="violet" />
      </View>
      {/* <View style={styles.list}>
        {
          list.map(( { id, value } ) => (
            <View style={styles.itemList} key={id}>
              <Text >{value}</Text>
              <Button
              title='x'
              onPress={() => removeItem(id)} 
              color= 'red'
            />
            </View>
          ))
        }
      </View> */}
      <View style={styles.list}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Delete Item</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <Text>Are you sure?</Text>
          <Text>{itemSelected.value}</Text>
          <Button 
            title='Okey' 
            onPress = { () => onHandlerDelete(itemSelected.id) }
            color = 'violet'
          />
        </View>
      </Modal>
    </View>
  );
}
