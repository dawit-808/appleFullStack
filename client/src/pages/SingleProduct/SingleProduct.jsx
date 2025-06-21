import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";
import "./SingleProduct.css";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5500/iphone/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (product !== null) {
    return (
      <div className="single-product-container">
        <h1 className="single-product-title">{product.product_name}</h1>
        <img
          src={product.product_img}
          alt={product.product_name}
          className="single-product-image"
        />
        <p className="single-product-description">
          {product.product_description}
        </p>
        <p className="single-product-price">
          Starting at <strong>{product.starting_price}</strong>
          <br />
          <span>({product.price_range})</span>
        </p>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default SingleProduct;
