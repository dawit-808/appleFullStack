import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://applefullstack.onrender.com/iphone")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Iphone</h1>
      <h3 className="text-center mb-5">Designed to be loved.</h3>
      {products.map((item, index) => (
        <div
          className="row align-items-center iphone-section"
          key={item.product_id}
        >
          <div className={`col-md-6 ${index % 2 !== 0 ? "order-md-last" : ""}`}>
            <div className="iphone-image-container">
              <img
                src={item.product_img}
                alt={item.product_name}
                className="iphone-image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="iphone-content">
              <h2 className="iphone-title">{item.product_name}</h2>
              <p className="iphone-desc">{item.product_brief_description}</p>
              <p className="iphone-price">
                Starting at <strong>{item.starting_price}</strong>
                <br />
                <span className="text-muted">({item.price_range})</span>
              </p>
              <Link to={`/iphone/${item.product_id}`} className="iphone-link">
                Learn more &gt;
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Iphone;
