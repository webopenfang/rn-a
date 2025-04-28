import { useSelector } from "react-redux";

function Rudex() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Rudex</h1>
      <p>{count}</p>
    </div>
  );
}

export default Rudex;
