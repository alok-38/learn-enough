import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Bob');

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }

    const handleChangeNameClick = () => {
        const newName = handleNameChange();
        setName(newName);
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleChangeNameClick}>
                Change Name
            </button>
        </main>
    )
}

export default Content;
