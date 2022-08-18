import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from 'react-native';
import theme from 'utils/theme';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
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
    <TouchableOpacity {...rest}>
      <View style={[styles.button, style]}>{renderChildren()}</View>
    </TouchableOpacity>
  );
};
