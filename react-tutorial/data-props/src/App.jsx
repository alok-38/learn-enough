import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title'
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header title="WWE" />
      <Header title="React" />
    </div>
  )
}

export default HomePage
