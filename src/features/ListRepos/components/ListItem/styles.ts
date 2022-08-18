import EStyleSheet from 'react-native-extended-stylesheet';
import theme from 'utils/theme';

const styles = EStyleSheet.create({
  listItem: {
    padding: '1.5rem',
    borderBottomColor: theme.colors.lightPurple,
    borderBottomWidth: 1,
  },
  topInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1.125rem',
  },
  titleInfos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: theme.colors.purple,
  },
  description: {
    fontWeight: '500',
    marginBottom: '1rem',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    color: theme.colors.purple,
  },
  starText: {
    fontWeight: 'bold',
    color: theme.colors.purple,
    marginLeft: '.25rem',
  },
  image: {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: 360,
    marginRight: '.375rem',
  },
});

export default styles;
