import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('finasteride');

  useEffect(() => {
		fetch('/data.json')
			.then((response) => response.json())
			.then((data) => {
				setData(data)
			})
	}, []);

  console.log('data from state: ', data);
  console.log('query from state: ', query);
  
  let testSearch = data.filter(word => word.drugs.includes('finasteride'));

  const performSearch = (value) => setQuery(value);

  console.log('testSearch: ', testSearch);
  console.log('performSearch: ', performSearch);

  return (
    <div className="App">
        <h1>Drug Search</h1>
        <div>
          <SearchForm performSearch={performSearch}/>
        </div>
        <ul>
        {testSearch.map((interactions) => (
          <li key={Math.floor(Math.random()*1000000)}>
            <h2>
              <span>{interactions.drugs[0]}</span>
              <span>x</span>
              <span>{interactions.drugs[1]}</span>
            </h2>
            <h3>{interactions.severity}</h3>
            <p>{interactions.description}</p>
          </li>
        ))}
        </ul>
    </div>
  );
}

export default App;
