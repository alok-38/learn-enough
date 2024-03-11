import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const relationship = [
    { name: 'Alok', age: 39 },
    { name: 'Susheela', age: 67 }
  ]

  return (
    <div>
      <p>{relationship[0].name} is {relationship[0].age} years old.</p>
      <p>{relationship[1].name} is {relationship[1].age} years old.</p>
    </div>
  )
}

export default App
