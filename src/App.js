import { useState } from 'react';
import './App.css';
import ApiConverser from './backend/components/ApiConverser';
import StatCard from './frontend/components/StatCard';

function App() {
  const [listOfMonsters, setListOfMonsters] = useState();




  return (
    <div className="App">
      <div className="body">
        <ApiConverser
          setListOfMonsters={setListOfMonsters} 
        />
        {listOfMonsters ? (
        <ul>
          {listOfMonsters.map((item) => (
            <StatCard key={item.slug} item={item} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}

export default App;
