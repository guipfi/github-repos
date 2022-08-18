import { View, ViewProps } from 'react-native';

import { ListItem } from '../ListItem';

export interface RepositoryListItemProps {
  id: number;
  img: string;
  title: string;
  description: string;
  stars: number;
  language: string;
  license: string;
  lastUpdate: Date;
  url: string;
}

export interface RepositoryListProps extends ViewProps {
  items?: RepositoryListItemProps[];
}

export const List: React.FC<RepositoryListProps> = ({ items, ...rest }) => (
  <View {...rest}>
    {items?.map((props, index) => (
      <ListItem key={props.id + index} {...props} />
    ))}
  </View>
);
