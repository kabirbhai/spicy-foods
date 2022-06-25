import React from "react";
import useLunch from "../../../../hooks/useDinner";
import Lunch from "./Lunch";

const Lunches = () => {
  const [lunches] = useLunch([]);
  return (
    <section>
      <div className="container gy-4 mx-auto row">
        {lunches.map((l) => (
          <Lunch key={l._id} lunch={l} />
        ))}
      </div>
    </section>
  );
};

export default Lunches;
