import { useEffect, useState } from "react";

const useBreakfast = () => {
  const [Breakfasts, setBreakfasts] = useState([]);
  console.log(Breakfasts);

  useEffect(() => {
    fetch("Breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfasts(data));
  }, []);
  return [Breakfasts, setBreakfasts];
};
export default useBreakfast;
