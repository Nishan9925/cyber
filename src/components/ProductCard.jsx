import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, name, description }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={`/product/${id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
