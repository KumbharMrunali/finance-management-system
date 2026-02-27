import { useEffect, useState, useCallback } from "react";
import { getAllProducts, deleteProduct } from "../api/productApi";

function ProductList({ reload }) {
  const [products, setProducts] = useState([]);
  const [isDeleting, setIsDeleting] = useState(null);

  const loadProducts = useCallback(async () => {
    const res = await getAllProducts();
    setProducts(res.data);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [reload, loadProducts]);  

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      setIsDeleting(id);
      try {
        await deleteProduct(id);
        loadProducts();
      } finally {
        setIsDeleting(null);
      }
    }
  };

  return (
    <div className="product-list-container">
      <h2 style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.25rem' }}>
        📋 All Expenses ({products.length})
      </h2>
      
      {products.length === 0 ? (
        <div className="empty-state" style={{ padding: 'var(--spacing-2xl)', textAlign: 'center' }}>
          <div className="empty-state-icon">💼</div>
          <p>No expenses added yet. Start by adding your first expense!</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>Expense Name</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="table-row">
                  <td className="col-name">
                    <span className="pill">{p.name}</span>
                  </td>
                  <td className="col-price">
                    <span className="price-badge">₹{parseFloat(p.price).toFixed(2)}</span>
                  </td>
                  <td className="col-category">
                    <span className="category-badge">{p.category}</span>
                  </td>
                  <td className="col-date">{new Date(p.prDate).toLocaleDateString()}</td>
                  <td className="col-action">
                    <button 
                      className="btn-delete"
                      onClick={() => handleDelete(p.id)}
                      disabled={isDeleting === p.id}
                      title="Delete this expense"
                    >
                      {isDeleting === p.id ? '⏳' : '🗑️'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductList;