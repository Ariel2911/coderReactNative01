import { Text, View, TextInput, Button } from 'react-native';
import React, { useState } from "react";

import { styles } from './styles';

export default function App() {
  const [ text, setText ] = useState('');
  const [ list, setList ] = useState([{
    id:1,
    value:'Buy some water'
  }]);

  const handleOnChangeText = (text) =>  {
    setText(text)
  }
  const addItem = () =>  {
    if(text !== ''){
      setList([...list,{
        
        id: Math.random().toString(),
        value: text
      }])
      setText('')
    }
  }
  const removeItem = (id) =>  {
    // console.warn(id);
    setList(list.filter((item) => item.id!=id))
  }
  // console.warn(list);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder='new task'
          placeholderTextColor={'red'}
          style={styles.input}
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}
        />
        <Button
          title='ADD'
          onPress={() => addItem()} 
          color= 'violet'
        />
      </View>
      <View style={styles.list}>
        {
          list.map(( { id, value } ) => (
            <View style={styles.itemList} key={id}>
              <Text >{value}</Text>
              <Button
              title='X'
              onPress={() => removeItem(id)} 
              color= 'red'
            />
            </View>
          ))
        }
      </View>
    </View>
  );
}
