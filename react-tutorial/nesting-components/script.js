function Header() {
    return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
    return <Header />;
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);