import React, { useState, useEffect } from 'react';

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

  return (
    <div className="App">
        <h1>Drug Search</h1>
        <div>
        {data.map((interactions) => (
          <li>
            <h2>{interactions.drugs}</h2>
            <p>{interactions.severity}</p>
            <p>{interactions.description}</p>
          </li>
        ))}
        </div>
    </div>
  );
}

export default App;
