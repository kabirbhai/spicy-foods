import { useEffect, useState } from "react";

const useLunch = () => {
  const [lunches, setLunches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/lunch")
      .then((res) => res.json())
      .then((data) => setLunches(data));
  }, []);
  return [lunches, setLunches];
};
export default useLunch;
