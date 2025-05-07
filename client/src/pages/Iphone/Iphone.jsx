import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";

function Iphones() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/iphones")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Iphone</h1>
        <h2 className="text-center">Designed to be loved.</h2>
        {products.map((item, index) => (
          <div
            className="row align-items-center iphone-section"
            key={item.product_id}
          >
            <div
              className={`col-md-6 text-center mb-3 ${
                index % 2 !== 0 ? "order-md-2" : "order-md-1"
              }`}
            >
              <img
                src={item.product_img}
                alt={item.product_name}
                className="img-fluid iphone-image"
              />
            </div>
            <div
              className={`col-md-6 text-center text-md-start ${
                index % 2 !== 0 ? "order-md-1" : "order-md-2"
              }`}
            >
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
        ))}
      </div>
    </>
  );
}

export default Iphones;
