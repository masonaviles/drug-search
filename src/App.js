import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';


function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
		fetch('/data.json')
			.then((response) => response.json())
			.then((data) => {
				setData(data);
        console.log("query in UE", query);
        setFilteredData( data.filter(word => word.drugs.join(' ').includes(query)) );
			})
      .catch(error => {
        console.log('Error: ' + error);
      })
	}, [query]);
  
  const performSearch = (value) => setQuery(value);

  return (
    <div className="App">
        <h1>Drug Search</h1>
        <div>
          <SearchForm performSearch={performSearch}/>
        </div>
        <h4>Major Interactions:</h4>
        <ul>
        {filteredData.map((interactions) => {
          if (interactions.severity === 'major') {
            return <li key={Math.floor(Math.random()*100000000)}>
            <h2>
              <span>{interactions.drugs[0]}</span>
              <span>x</span>
              <span>{interactions.drugs[1]}</span>
            </h2>
            <h3>{interactions.severity}</h3>
            <p>{interactions.description}</p>
          </li>
          }
        })}
        </ul>

        <h4>Moderate Interactions:</h4>
        <ul>
        {filteredData.map((interactions) => {
          if (interactions.severity === 'moderate') {
            return <li key={Math.floor(Math.random()*1000000)}>
            <h2>
              <span>{interactions.drugs[0]}</span>
              <span>x</span>
              <span>{interactions.drugs[1]}</span>
            </h2>
            <h3>{interactions.severity}</h3>
            <p>{interactions.description}</p>
          </li>
          }
        })}
        </ul>

        <h4>Minor Interactions:</h4>
        <ul>
        {filteredData.map((interactions) => {
          if (interactions.severity === 'minor') {
            return <li key={Math.floor(Math.random()*1000000)}>
            <h2>
              <span>{interactions.drugs[0]}</span>
              <span>x</span>
              <span>{interactions.drugs[1]}</span>
            </h2>
            <h3>{interactions.severity}</h3>
            <p>{interactions.description}</p>
          </li>
          }
        })}
        </ul>
    </div>
  );
}

export default App;
