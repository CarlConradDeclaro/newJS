import { useState, useEffect } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/') // Update the URL with your server address
      .then(response => response.text())
      .then(data => setGreeting(data))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;

