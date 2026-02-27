import { useState } from "react";
import { getByCategory } from "../api/productApi";

function FilterByCategory() {
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);

  const handleFilter = async () => {
    if (category) {
      const res = await getByCategory(category);
      setData(res.data);
    }
  };

  return (
    <div className="filter-card">
      <h2>🏷️ Filter By Category</h2>
      <div className="form-group">
        <label htmlFor="category-input">Category Name</label>
        <input 
          id="category-input"
          placeholder="Enter category (e.g., Electronics, Clothing)" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
        />
      </div>
      <div className="form-actions">
        <button onClick={handleFilter}>🔍 Search</button>
      </div>

      {data.length > 0 && (
        <div className="results-section">
          <div className="results-header">
            <span>Results</span>
            <span className="results-count">{data.length} found</span>
          </div>
          <ul className="results-list">
            {data.map((p) => (
              <li key={p.id} className="result-item">
                <div className="result-item-title">{p.name}</div>
                <div className="result-item-meta">
                  <span className="result-price">₹{p.price}</span>
                  <span className="result-category">{p.category}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.length === 0 && category && (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <p>No products found for "{category}"</p>
        </div>
      )}
    </div>
  );
}

export default FilterByCategory;
