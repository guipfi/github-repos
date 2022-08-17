import {
  View,
  TouchableHighlight,
  TouchableHighlightProps,
  Text,
  ActivityIndicator,
} from 'react-native';
import theme from 'utils/theme';

import styles from './styles';

interface ButtonProps extends TouchableHighlightProps {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { isLoading, children, style, ...rest } = props;

  const renderChildren = () => {
    if (isLoading) {
      return <ActivityIndicator color={theme.colors.white} />;
    }

    if (typeof children === 'string') {
      return <Text style={styles.btnText}>{children}</Text>;
    }
    return children;
  };

  return (
    <TouchableHighlight {...rest}>
      <View style={[styles.button, style]}>{renderChildren()}</View>
    </TouchableHighlight>
  );
};

export { Button };
