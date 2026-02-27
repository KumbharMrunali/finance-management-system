import { useState } from "react";
import { addProduct } from "../api/productApi";

function AddProduct({ refresh }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    prDate: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addProduct(product);
      refresh();
      setProduct({ name: "", price: "", category: "", prDate: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>➕ Add New Expense</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Expense Name</label>
          <input 
            id="name"
            name="name" 
            placeholder="e.g., Office Supplies" 
            value={product.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Amount (₹)</label>
          <input 
            id="price"
            name="price" 
            type="number" 
            placeholder="0.00" 
            value={product.price} 
            onChange={handleChange} 
            step="0.01"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input 
            id="category"
            name="category" 
            placeholder="e.g., Food, Transport" 
            value={product.category} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="prDate">Date</label>
          <input 
            id="prDate"
            name="prDate" 
            type="date" 
            value={product.prDate} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? '⏳ Adding...' : '✅ Add Expense'}
        </button>
      </div>
    </form>
  );
}

export default AddProduct;