import { FontAwesome } from '@expo/vector-icons';
import { Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Flex } from 'components/Flex';

import styles from './styles';

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

export function formatStars(stars: number) {
  if (stars >= 100000000000) {
    return '+999Bi';
  } else if (stars >= 1000000000) {
    return `${Math.floor(stars / 1000000000)}Bi`;
  } else if (stars >= 1000000) {
    return `${Math.floor(stars / 1000000)}Mi`;
  } else if (stars >= 1000) {
    return `${Math.floor(stars / 1000)}k`;
  }
  return stars.toString();
}

export function formatText(text: string, maxLenght: number) {
  if (text.length > maxLenght) {
    return text.slice(0, maxLenght) + '...';
  }
  return text;
}

export function formatDate(date: Date) {
  const today = new Date();
  const diff = today.getTime() - date.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  return 'now';
}

export const ListItem: React.FC<RepositoryListItemProps> = ({
  img,
  title,
  description,
  stars,
  language,
  license,
  lastUpdate,
  url,
}) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Flex style={styles.listItem}>
      <Flex style={styles.topInfos}>
        <Flex style={styles.titleInfos}>
          <Image source={{ uri: img }} style={styles.image} />
          <Text style={styles.title}>{formatText(title, 25)}</Text>
        </Flex>
        <Flex style={styles.star}>
          <FontAwesome style={styles.starIcon} name={'star'} />
          <Text style={styles.starText}>{formatStars(stars)}</Text>
        </Flex>
      </Flex>
      <Text style={styles.description}>{formatText(description, 100)}</Text>
      <Text>
        {language} · {license ?? 'Not licensed'} · Updated {formatDate(lastUpdate)}
      </Text>
    </Flex>
  </TouchableOpacity>
);
