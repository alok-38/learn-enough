import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = useState(0);

    function handleClicks() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => {
                    <li key={name}>{name}</li>
                })}
            </ul>

            <button onclick={handleClicks}>Like ({likes})</button>
        </div>
    );
}