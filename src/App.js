import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data) // new
			})
	}, [])

  return (
    <div className="App">
        <h1>Drug Search</h1>
        <div>
        {posts.map((item) => (
          <li>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
        </div>
    </div>
  );
}

export default App;
