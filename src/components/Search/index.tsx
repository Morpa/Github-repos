import React from 'react';

import LANGUAGES from '../../constants/languages.constant';
import Input from '../shared/Input';
import Select from '../shared/Select';

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
    <div>
      <Input
        placeholder="Repo Search"
        label="Repo Search"
        value={searchText}
        onChange={e => handleSearchTextChange(e.target.value)}
      />
      <Select
        Label="Language"
        value={language}
        onChange={e => handleLanguageChange(e.target.value)}
        options={options}
      />
    </div>
  );
};

export default Search;