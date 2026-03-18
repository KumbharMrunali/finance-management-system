import { useState, useCallback } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import FilterMonth from "./components/FilterMonth";
import FilterByRange from "./components/FilterByRange";
import FilterByCategory from "./components/FilterByCategory";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [reload, setReload] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authView, setAuthView] = useState("login");

  const refresh = useCallback(() => {
    setReload(!reload);
  }, [reload]);

  if (!loggedInUser) {
    return (
      <div>
        <h1>💰 Finance Management Dashboard</h1>
        <div className="main-container">
          {authView === "login" ? (
            <Login setLoggedInUser={setLoggedInUser} onSwitch={setAuthView} />
          ) : (
            <Signup onSwitch={setAuthView} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>💰 Finance Management Dashboard</h1>
      <div className="main-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ fontWeight: 700 }}>Welcome, {loggedInUser.name || loggedInUser.email}</div>
          <button onClick={() => setLoggedInUser(null)} style={{ background: 'transparent', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}>Logout</button>
        </div>

        <div className="card">
          <AddProduct refresh={refresh} />
        </div>

        <div className="card">
          <h2>📊 All Products</h2>
          <ProductList reload={reload} />
        </div>

        <div className="filter-section">
          <h2>🔍 Filter Products</h2>
          <div className="filters-grid">
            <FilterMonth />
            <FilterByRange />
            <FilterByCategory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;