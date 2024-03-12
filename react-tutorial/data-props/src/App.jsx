import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function createTitle(title="Alok") {
  if (title) {
    return title;
  } else {
    return 'Default title'
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}

export default Header
