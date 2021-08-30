import React, { useState } from 'react';

function SearchForm(props) {
  
  const [searchText, setSearchText] = useState('');

  const onSearchChange = (e) => setSearchText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.performSearch(searchText);
    e.currentTarget.reset();
  }

  console.log("search text: ", searchText);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      {/* <label className="is-hidden" htmlFor="search">Search</label> */}
      <input type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Search..."
      />
      <button type="submit" id="submit" className="search-button">search</button>
    </form>
  );
}

export default SearchForm;