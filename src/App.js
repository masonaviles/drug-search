import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
		fetch('/data.json')
			.then((response) => response.json())
			.then((data) => {
				setData(data)
			})
	}, []);

  console.log('data from state: ', data);

  const testSearch = data.filter(word => word.drugs.includes('finasteride'));

  //console.log('sample search', testSearch[0].drugs[0]);

  return (
    <div className="App">
        <h1>Drug Search</h1>
        <div>
          <SearchForm/>
        </div>
        <ul>
        {testSearch.map((interactions) => (
          <li>
            <h2>{interactions.drugs[0]}</h2>
            <h3>{interactions.drugs[1]}</h3>
            <p>{interactions.severity}</p>
            <p>{interactions.description}</p>
          </li>
        ))}
        </ul>
    </div>
  );
}

export default App;
