import EStyleSheet from 'react-native-extended-stylesheet';
import theme from 'utils/theme';

const styles = EStyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '3rem',
    borderRadius: 360,
    backgroundColor: theme.colors.purple,
  },
  btnText: {
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});

export default styles;
