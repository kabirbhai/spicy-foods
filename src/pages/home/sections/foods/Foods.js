import React from "react";
import { Link, Outlet } from "react-router-dom";

const Foods = () => {
  return (
    <div>
      <div className="bg-light py-4 text-center">
        <Link className=" text-primary fs-3 mx-2" to="/foods/breakfast">
          Breakfast
        </Link>
        <Link className=" text-primary fs-3 mx-2" to="/foods/lunch">
          Lunch
        </Link>
        <Link className=" text-primary fs-3 mx-2" to="/foods/dinner">
          Dinner
        </Link>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Foods;
