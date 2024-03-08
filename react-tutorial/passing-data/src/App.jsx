import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Alok'
  const age = 39
  const name1 = 'Mother'
  const age1 = 67

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Alok' age={29 + 10} />
      <Hello name={name1} age={age1} />
      <Footer />
    </div>
  )
}

export default App
