import { SearchField } from 'components/SearchField';
import { Button } from 'components/Button';
import { View, ScrollView } from 'react-native';
import { List } from './components/List';

import styles from './styles';

const items = [
  {
    id: Math.random(),
    img: 'https://reactnative.dev/img/logo-og.png',
    title: 'durable/crm-project',
    description: 'Delightful JavaScript Testing.',
    language: 'Typescript',
    license: 'MIT Licensed',
    lastUpdate: new Date(),
    stars: 400000,
  },
  {
    id: Math.random(),
    img: 'https://reactnative.dev/img/logo-og.png',
    title: 'durable/crm-project',
    description: 'Delightful JavaScript Testing.',
    language: 'Typescript',
    license: 'MIT Licensed',
    lastUpdate: new Date(),
    stars: 400000,
  },
  {
    id: Math.random(),
    img: 'https://reactnative.dev/img/logo-og.png',
    title: 'durable/crm-project',
    description: 'Delightful JavaScript Testing.',
    language: 'Typescript',
    license: 'MIT Licensed',
    lastUpdate: new Date(),
    stars: 400000,
  },
  {
    id: Math.random(),
    img: 'https://reactnative.dev/img/logo-og.png',
    title: 'durable/crm-project',
    description: 'Delightful JavaScript Testing.',
    language: 'Typescript',
    license: 'MIT Licensed',
    lastUpdate: new Date(),
    stars: 400000,
  },
  {
    id: Math.random(),
    img: 'https://reactnative.dev/img/logo-og.png',
    title: 'durable/crm-project',
    description: 'Delightful JavaScript Testing.',
    language: 'Typescript',
    license: 'MIT Licensed',
    lastUpdate: new Date(),
    stars: 400000,
  },
];

export const ListRepos: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchField
          style={styles.centeredItem}
          inputProps={{ placeholder: 'Search repositories...' }}
        />
        <List items={items} />
        <Button style={styles.centeredItem}>Load more</Button>
      </View>
    </ScrollView>
  );
};
