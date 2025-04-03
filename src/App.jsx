import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const countriesFetch = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
}

function App() {
  const countriesPromise = countriesFetch();
  return (
    <>
      <Suspense fallback={<h2>Countries Loading....</h2>}> 
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
