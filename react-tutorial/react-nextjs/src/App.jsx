import React from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = React.useState(0);

  function handleClicks() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClicks}>Like({likes})</button>
    </div>
  );
}

export default HomePage;
