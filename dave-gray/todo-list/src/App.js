import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
