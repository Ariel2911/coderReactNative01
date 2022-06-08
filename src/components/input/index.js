import react from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

const Input = ({
  placeholder,
  style,
  placeholderTexColor= '#212121',
  value,
  onChangeText,
  onBlur= () => null,
  onFocus= () => null,
  editable,
  ...props
}) => {
  const onHandleChangeText = ( text ) => {
    onChangeText(text);
  };
  const onHandleBlur = () => {
    onBlur();
  };
  const onHandleFocus = () => {
    onFocus();
  };

  return(
    <TextInput
    {...props}
          placeholder={ placeholder }
          style={[ styles.input, { ...style } ]}
          placeholderTextColor={ placeholderTexColor }
          value={value}
          onFocus={ onHandleFocus }
          onBlur={ onHandleBlur }
          onChangeText={ onHandleChangeText }
        />
  )
}

export default Input;
