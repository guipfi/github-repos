import { FontAwesome } from '@expo/vector-icons';
import { Text, Image, View } from 'react-native';
import { Flex } from 'components/Flex';

import styles from './styles';

interface ListItemProps {
  id: number;
  img: string;
  title: string;
  description: string;
  stars: number;
  language: string;
  license: string;
  lastUpdate: Date;
}

interface ListProps {
  items: ListItemProps[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  function formatStars(stars: number) {
    if (stars >= 1000000000) {
      return `${Math.floor(stars / 1000000000)}Bi`;
    } else if (stars >= 1000000) {
      return `${Math.floor(stars / 1000000)}Mi`;
    } else if (stars >= 1000) {
      return `${Math.floor(stars / 1000)}k`;
    }
    return stars;
  }

  function formatDescription(description: string) {
    if (description.length > 100) {
      return description.slice(0, 100) + '...';
    }
    return description.slice(0, 100);
  }

  function formatDate(date: Date) {
    const today = new Date();
    const diff = today.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} years ago`;
    } else if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    }
    return 'now';
  }

  return (
    <View>
      {items.map(({ id, img, title, description, stars, language, license, lastUpdate }) => (
        <Flex key={id} style={styles.listItem}>
          <Flex style={styles.topInfos}>
            <Flex style={styles.titleInfos}>
              <Image source={{ uri: img }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </Flex>
            <Flex style={styles.star}>
              <FontAwesome style={styles.starIcon} name={'star'} />
              <Text style={styles.starText}>{formatStars(stars)}</Text>
            </Flex>
          </Flex>
          <Text style={styles.description}>{formatDescription(description)}</Text>
          <Text>
            {language} · {license} · Updated {formatDate(lastUpdate)}
          </Text>
        </Flex>
      ))}
    </View>
  );
};
