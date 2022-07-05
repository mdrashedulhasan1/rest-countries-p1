import './App.css';
import { useEffect, useState } from 'react';
import Country from './Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div className="App">
      <h1>Total Countries: {countries.length}</h1>
      <div className='countries-container'>
        {
          countries.map(country => <Country name={country.name} capital={country.capital} population={country.population}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
