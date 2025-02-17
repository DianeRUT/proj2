import React, { useState } from "react";
import "../Dashboard/Dashboard_Styles/productInventory.css";

const initialProducts = [
  { id: 1, name: "Wireless Headphones", image: "https://via.placeholder.com/100", description: "This is product 2", price: "$150" , stock: 20 },
  { id: 2, name: "Smartwatch", image: "https://via.placeholder.com/100", description: "This is product 2", price: "$150" , stock: 20 },
  { id: 3, name: "Bluetooth Speaker", image: "https://via.placeholder.com/100", description: "This is product 2", price: "$150" , stock: 20 },

  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/100",
    description: "This is product 2",
    price: "$25.00",
    stock: 30,
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://via.placeholder.com/100",
    description: "This is product 3",
    price: "$30.00",
    stock: 15,
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://via.placeholder.com/100",
    description: "This is product 4",
    price: "$35.00",
    stock: 80,
  },
  {
    id: 7,
    name: "Product 7",
    image: "https://via.placeholder.com/100",
    description: "This is product 5",
    price: "$40.00",
    stock: 5,
  },
  {
    id: 8,
    name: "Product 8",
    image: "https://via.placeholder.com/100",
    description: "This is product 6",
    price: "$50.00",
    stock: 12,
  },
  {
    id: 9,
    name: "Product 9",
    image: "https://via.placeholder.com/100",
    description: "This is product 7",
    price: "$45.00",
    stock: 20,
  },
  {
    id: 10,
    name: "Product 10",
    image: "https://via.placeholder.com/100",
    description: "This is product 8",
    price: "$60.00",
    stock: 3,
  },
  {
    id: 11,
    name: "Product 11",
    image: "https://via.placeholder.com/100",
    description: "This is product 9",
    price: "$70.00",
    stock: 10,
  },
  {
    id: 12,
    name: "Product 12",
    image: "https://via.placeholder.com/100",
    description: "This is product 10",
    price: "$80.00",
    stock: 25,
  },
];


const ProductInventory = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ id: "", name: "", image: "", description: "", price: "", stock: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      alert("Please fill out all required fields.");
      return;
    }

    const updatedProducts = [
      ...products,
      { ...newProduct, id: products.length + 1, price: parseFloat(newProduct.price), stock: parseInt(newProduct.stock) },
    ];
    setProducts(updatedProducts);
    setNewProduct({ id: "", name: "", image: "", description: "", price: "", stock: "" });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id ? { ...editingProduct, ...newProduct } : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
    setNewProduct({ id: "", name: "", image: "", description: "", price: "", stock: "" });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setNewProduct({ id: "", name: "", image: "", description: "", price: "", stock: "" });
  };

  return (
    <div className="product-table-container">
      <h2>Product Inventory</h2>

      {/* Product Form */}
      <div className="product-form">
        <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
        <input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleInputChange} />
        
        <button onClick={editingProduct ? handleUpdateProduct : handleAddProduct}>
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
        {editingProduct && <button onClick={handleCancelEdit}>Cancel</button>}
      </div>

      {/* Product Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="table-row">
              <td>
                <input type="checkbox" className="product-checkbox" />
              </td>
              <td>{product.name}</td>
              <td>
                <img src={product.image} alt={product.name} className="product-image" />
              </td>
              <td>{product.description}</td>
              <td>${parseFloat(product.price.replace('$', '')).toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEditProduct(product)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInventory;
