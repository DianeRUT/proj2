// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { products } from "./ProductSection";
// import '../styles/productdetails.css';
// const ProductDetailPage = () => {
//   const { productId } = useParams();
 
//   const product = products.find((p) => p.id ==productId);

  

//   return (
//     <div className="product-detail-container">
//       <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
//       <div className="product-detail">
//         <img src={product.image}  className="detail-image" />
//         <div className="product-info">
//           <h1>{product.name}</h1>
//           <p className="price">{product.price}</p>
//           <div className="rating">{renderStars(product.rating)}</div>
//           <p className="description">
//             {product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
//           </p>
//           <div className="color-options">
//             {product.colors?.map((color, index) => (
//               <span key={index} className={`color ${color}`}></span>
//             ))}
//           </div>
//           <button className="add-to-cart-btn">Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add the renderStars function here or import it
// const renderStars = (rating) => {
//   return Array.from({ length: 5 }, (_, i) => (
//     <span key={i} className={`star ${i < Math.floor(rating) ? "filled" : ""}`}>
//       {i < Math.floor(rating) ? <FaStar /> : <FaRegStar />}
//     </span>
//   ));
// };

// export default ProductDetailPage;