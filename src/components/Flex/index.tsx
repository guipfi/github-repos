import { View, ViewProps } from 'react-native';

const Flex: React.FC<ViewProps> = ({ style, ...rest }) => (
  <View {...rest} style={[{ display: 'flex', flexDirection: 'column' }, style]} />
);

export { Flex };
