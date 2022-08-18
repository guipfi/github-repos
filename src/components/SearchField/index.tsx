import { FontAwesome } from '@expo/vector-icons';
import {
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import styles from './styles';

interface SearchFieldProps extends ViewProps {
  buttonProps?: TouchableOpacityProps;
  inputProps?: TextInputProps;
}

const SearchField: React.FC<SearchFieldProps> = ({ buttonProps, inputProps, ...rest }) => {
  const { style: containerStyle, ...containerProps } = rest;

  return (
    <View style={[containerStyle, styles.container]} {...containerProps}>
      <TextInput {...inputProps} style={styles.field} />
      <TouchableOpacity {...buttonProps}>
        <View style={styles.button}>
          <FontAwesome style={styles.searchIcon} name={'search'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export { SearchField };
