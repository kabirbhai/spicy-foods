import React from "react";
import Breakfast from "./Breakfast";
import useBreakfast from "../../../../hooks/useBreakfast";

const Breakfasts = () => {
  const [breakfasts] = useBreakfast([]);
  console.log(breakfasts);

  return (
    <section>
      <div className="container gy-4 mx-auto row">
        {breakfasts.map((b) => (
          <Breakfast key={b._id} breakfast={b} />
        ))}
      </div>
    </section>
  );
};

export default Breakfasts;
