import Input from '@components/shared/Input';
import Select from '@components/shared/Select';
import LANGUAGES from '@constants/languages.constant';
import React from 'react';

import styles from './styles.module.scss';

interface SearchProps {
  language: string;
  searchText: string;
  handleSearchTextChange: (value: string) => void;
  handleLanguageChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = props => {
  const {
    language,
    searchText,
    handleSearchTextChange,
    handleLanguageChange,
  } = props;

  const options = [{ value: '', label: 'All' }, ...LANGUAGES];

  return (
    <div className={styles.search}>
      <Input
        className={styles.searchInput}
        placeholder="Repo Search"
        label="Repo Search"
        value={searchText}
        onChange={e => handleSearchTextChange(e.target.value)}
      />
      <Select
        className={styles.languageSelect}
        Label="Language"
        value={language}
        onChange={e => handleLanguageChange(e.target.value)}
        options={options}
      />
    </div>
  );
};

export default Search;
