import React from "react";
import useBreakfast from "../../../../hooks/useBreakfast";
import Breakfast from "./Breakfast";

const Breakfasts = () => {
  const [Breakfasts] = useBreakfast([]);

  return (
    <section>
      <h1>Breakfast</h1>
      <div className="container gy-4 mx-auto row">
        {Breakfasts.map((b) => (
          <Breakfast key={b.id} breakfast={b} />
        ))}
      </div>
    </section>
  );
};

export default Breakfasts;
