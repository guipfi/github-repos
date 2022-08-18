import { SearchField } from 'components/SearchField';
import { Button } from 'components/Button';
import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { List, RepositoryListItemProps } from './components/List';
import React, { useEffect, useState } from 'react';
import { GitHubService } from './service';
import theme from 'utils/theme';

import styles from './styles';

export interface RepositoryInfosProps {
  count: number;
  items: RepositoryListItemProps[];
}

export const ListRepos: React.FC = () => {
  const [repositories, setRepositories] = useState<RepositoryInfosProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page) {
      getRepos();
    }
  }, [page]);

  async function getRepos() {
    try {
      setIsLoading(true);
      if (searchTerm === '') {
        setRepositories({ count: 0, items: [] });
      } else {
        const repos = await GitHubService.getRepos(searchTerm, page);
        setRepositories(
          page === 1
            ? repos
            : { count: repos.count, items: [...(repositories?.items ?? []), ...repos.items] },
        );
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearchTermChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    setSearchTerm(e.nativeEvent.text);
    setIsError(false);
  }

  function handleSearch() {
    if (page === 1) getRepos();
    setPage(1);
  }

  function handleLoadMore() {
    setPage(page + 1);
  }

  function hasMoreToLoad() {
    return (
      !(isLoading && page === 1) &&
      repositories &&
      repositories.count > page * GitHubService.itensPerPage
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchField
          style={styles.searchBar}
          inputProps={{
            value: searchTerm,
            onChange: handleSearchTermChange,
            onSubmitEditing: handleSearch,
            onKeyPress: (e) => (e.nativeEvent.key === 'enter' ? handleSearch() : null),
            placeholder: 'Search repositories...',
          }}
          buttonProps={{
            onPress: handleSearch,
          }}
        />
        {isLoading && page === 1 ? (
          <ActivityIndicator color={theme.colors.purple} />
        ) : isError || repositories?.count === 0 ? (
          <Text style={styles.textCenter}>
            Sorry, we didn&rsquo;t found what you are loking for, please try again.
          </Text>
        ) : !repositories ? (
          <Text style={styles.textCenter}>Let&rsquo;s explore new github repositories!</Text>
        ) : (
          <List style={styles.list} items={repositories?.items} />
        )}
        {hasMoreToLoad() && (
          <Button style={styles.btn} isLoading={isLoading} onPress={handleLoadMore}>
            Load more
          </Button>
        )}
      </View>
    </ScrollView>
  );
};
