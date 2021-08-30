import React, { useState } from 'react';

function SearchForm(props) {
  
  const [searchText, setSearchText] = useState('');

  const onSearchChange = (e) => setSearchText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.performSearch(searchText);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <textarea type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Search..."
        rows="5"
      />
      <button type="submit" id="submit" className="search-button">search</button>
    </form>
  );
}

export default SearchForm;