import React, { useState, useCallback } from 'react';

import Search from '../components/Search';
import { searchRepos } from '../services/githubService';

const Index: React.FC = () => {
  const [searchText, setSeachText] = useState('');
  const [language, setLanguage] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadRepos = useCallback(async (searchText, language) => {
    setLoading(true);
    const response = await searchRepos(searchText, language);
    setLoading(false);
    setRepos(response.data.items);
  }, []);

  const handleSearchTextChange = useCallback(
    text => {
      setSeachText(text);
      loadRepos(text, language);
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
    <div>
      <Search
        searchText={searchText}
        language={language}
        handleSearchTextChange={handleSearchTextChange}
        handleLanguageChange={handleLanguageChange}
      />
      {loading ? 'Loading...' : <div>{JSON.stringify(repos, null, 2)}</div>}
    </div>
  );
};

export default Index;
