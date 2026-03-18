import { useState } from "react";
import { getByMonth } from "../api/productApi";

function FilterMonth() {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState([]);

  const handleFilter = async () => {
    if (month && year) {
      const res = await getByMonth(month, year);
      setData(res.data);
    }
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="filter-card">
      <h2>📆 Filter By Month</h2>
      <div className="input-group">
        <div className="form-group">
          <label htmlFor="month-select">Month</label>
          <select 
            id="month-select"
            value={month} 
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {monthNames.map((m, idx) => (
              <option key={idx + 1} value={idx + 1}>{m}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="year-input">Year</label>
          <input 
            id="year-input"
            placeholder="e.g., 2024" 
            value={year} 
            onChange={(e) => setYear(e.target.value)}
            type="number"
            min="2000"
            max={new Date().getFullYear()}
          />
        </div>
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.length === 0 && month && year && (
        <div className="empty-state">
          <div className="empty-state-icon">🗓️</div>
          <p>No products found for {monthNames[month - 1]} {year}</p>
        </div>
      )}
    </div>
  );
}

export default FilterMonth;