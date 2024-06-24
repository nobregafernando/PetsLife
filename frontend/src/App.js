import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('There was an error fetching the data!', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao PetsLife!</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
