import React from "react";
import useBreakfast from "../../../../hooks/useBreakfast";

const Breakfasts = () => {
  const [Breakfasts] = useBreakfast([]);
  console.log(Breakfasts);

  return (
    <div>
      <h1>Breakfast</h1>
      <div>
        {Breakfasts.map((b) => (
          <div key={b.id}></div>
        ))}
      </div>
    </div>
  );
};

export default Breakfasts;
