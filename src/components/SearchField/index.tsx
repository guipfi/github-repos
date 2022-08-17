import { FontAwesome } from '@expo/vector-icons';
import {
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

import styles from './styles';

interface SearchFieldProps extends ViewProps {
  buttonProps?: TouchableHighlightProps;
  inputProps?: TextInputProps;
}

const SearchField: React.FC<SearchFieldProps> = ({ buttonProps, inputProps, ...rest }) => {
  const { style: containerStyle, ...containerProps } = rest;

  return (
    <View style={[containerStyle, styles.container]} {...containerProps}>
      <TextInput {...inputProps} style={styles.field} />
      <TouchableHighlight {...buttonProps}>
        <View style={styles.button}>
          <FontAwesome style={styles.searchIcon} name={'search'} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export { SearchField };
