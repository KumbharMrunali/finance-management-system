import { useState } from "react";
import { getByRange } from "../api/productApi";

function FilterByRange() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState([]);

  const handleFilter = async () => {
    if (startDate && endDate) {
      const res = await getByRange(startDate, endDate);
      setData(res.data);
    }
  };

  return (
    <div className="filter-card">
      <h2>📅 Filter By Date Range</h2>
      <div className="input-group">
        <div className="form-group">
          <label htmlFor="start-date">Start Date</label>
          <input 
            id="start-date"
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">End Date</label>
          <input 
            id="end-date"
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
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
                  <span className="result-date">{p.prDate}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.length === 0 && startDate && endDate && (
        <div className="empty-state">
          <div className="empty-state-icon">📆</div>
          <p>No products found in this date range</p>
        </div>
      )}
    </div>
  );
}

export default FilterByRange;
