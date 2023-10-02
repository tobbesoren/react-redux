import { useState } from 'react'
import './App.css'
import Counter from './components/counter'
import Profile from './components/Profile'
import { useSelector } from 'react-redux'

function App() {

  const alias = useSelector(state => state.profile.alias);
  const name = useSelector(state => state.profile.name);
  

  return (
   
    <div>
      <h2>Välkommen {alias}</h2>
      <Profile/>
      <br />
      <br />
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

export default App
