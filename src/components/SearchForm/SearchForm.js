import SearchFormStyled from './SearchForm.styled';
import SearchFormInput from './SearchFormButton/SearchFormInput/SearchFormInput';
import SearchFormButton from './SearchFormButton/SearchFormButton';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = e => {
    setSearchText(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchText);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <SearchFormButton />
      <SearchFormInput onChange={handleChange} value={searchText} />
    </SearchFormStyled>
  );
};

export default SearchForm;

SearchForm.propType = {
  searchText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
