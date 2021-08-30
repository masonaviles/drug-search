import React, { useState, useEffect } from 'react';

// const [data, setData] = useState([]);
//   const [query, setQuery] = useState('cats');
//   const [isLoading, setIsLoading] = useState(true);

//   const performSearch = (value) => setQuery(value);

//   useEffect(() => { 
//     // Be sure to add your API key
//     axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=rXDJp5KfBOkYxmn2kxAUQSS2SJNt7PlB`)
//       .then(response => setData(response.data.data))
//       .catch(error => console.log('Error fetching and parsing data', error))
//       .finally(() => setIsLoading(false));
//   }, [query]);

function App() {
  // const [ interaction, setInteraction ] = useState(null);
  // const [ interactionSeverity, setInteractionSeverity ] =  useState([]);

  useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => console.log(data))
	}, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
