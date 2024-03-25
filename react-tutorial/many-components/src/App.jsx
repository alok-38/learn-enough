import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Order from "./components/Order";

const App = () => {
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" age={100} />
      </div>
      <Order />
      <Inventory />
    </div>
  );
}

export default App;