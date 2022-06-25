import React from "react";
import { Link } from "react-router-dom";

const Lunch = ({ lunch }) => {
  const { title, desc, img, price } = lunch;
  return (
    <section className="col-12 col-md-4 col-lg-3">
      <div
        className="card shadow
      "
      >
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <h3>{price}</h3>
          <Link to="/" className="btn btn-primary">
            Choose
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Lunch;
