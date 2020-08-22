import RepoList from '@components/RepoList';
import Search from '@components/Search';
import { getRandomWord } from '@helpers/randomWorldHelper';
import { searchRepos } from '@services/githubService';
import { GetServerSideProps } from 'next';
import React, { useState, useCallback } from 'react';

import styles from './styles.module.scss';

interface Props {
  searchTerm: string;
  reposData: [];
}

const Index: React.FC<Props> = ({ searchTerm, reposData }) => {
  const [searchText, setSeachText] = useState(searchTerm);
  const [language, setLanguage] = useState('');
  const [repos, setRepos] = useState(reposData);
  const [loading, setLoading] = useState(false);

  const loadRepos = useCallback(async (searchText, language) => {
    setLoading(true);
    const response = await searchRepos(searchText, language);

    if (response && response.data) {
      setLoading(false);
      setRepos(response.data.items);
    }
  }, []);

  const handleSearchTextChange = useCallback(
    text => {
      setSeachText(text);

      if (text) {
        loadRepos(text, language);
      }
    },
    [language, loadRepos],
  );

  const handleLanguageChange = useCallback(
    language => {
      setLanguage(language);
      loadRepos(searchText, language);
    },
    [loadRepos, searchText],
  );

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/image/study.svg" alt="Logo" />
      <Search
        searchText={searchText}
        language={language}
        handleSearchTextChange={handleSearchTextChange}
        handleLanguageChange={handleLanguageChange}
      />
      <RepoList loading={loading} repositories={repos} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const searchTerm = getRandomWord();
  const response = await searchRepos(searchTerm);
  return {
    props: {
      searchTerm,
      reposData: response.data.items,
    },
  };
};

export default Index;
