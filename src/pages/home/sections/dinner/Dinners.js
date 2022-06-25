import React from "react";
import Dinner from "./Dinner";
import useDinner from "../../../../hooks/useDinner";

const Dinners = () => {
  const [dinners] = useDinner([]);

  return (
    <section>
      <div className="container gy-4 mx-auto row">
        {dinners.map((d) => (
          <Dinner key={d._id} dinner={d} />
        ))}
      </div>
    </section>
  );
};

export default Dinners;
