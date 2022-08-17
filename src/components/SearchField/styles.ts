import EStyleSheet from 'react-native-extended-stylesheet';
import theme from 'utils/theme';

const styles = EStyleSheet.create({
  container: {
    postion: 'relative',
    width: '80%',
    height: '4rem',
    borderRadius: 360,
    backgroundColor: theme.colors.lightPurple,
  },
  field: {
    position: 'absolute',
    left: '1.5rem',
    top: '1.4rem',
    width: '65%',
    fontSize: '1.125rem',
  },
  button: {
    position: 'absolute',
    right: '.625rem',
    top: '.5rem',
    display: 'flex',
    width: '3rem',
    height: '3rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
    backgroundColor: theme.colors.purple,
  },
  searchIcon: {
    color: theme.colors.white,
    fontSize: '1.25rem',
  },
});

export default styles;
