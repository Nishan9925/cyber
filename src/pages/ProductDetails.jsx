import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", description: "Details about product 1" },
  { id: 2, name: "Product 2", description: "Details about product 2" },
  { id: 3, name: "Product 3", description: "Details about product 3" },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
