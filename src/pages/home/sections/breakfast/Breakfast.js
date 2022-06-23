import React from "react";
import { Link } from "react-router-dom";

const Breakfast = ({ breakfast }) => {
  const { title, desc, img } = breakfast;
  console.log(breakfast);
  return (
    <section className="col-12 col-md-4 col-lg-3">
      <div
        className="card border-none
      "
      >
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <Link to="/" className="btn btn-primary">
            Choose
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Breakfast;
