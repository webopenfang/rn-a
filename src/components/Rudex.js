import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addToNum } from "../store/modules/counterStore";
import {fetchChannels} from "../store/modules/channelStore";
import { useEffect } from "react";

function Rudex() {
  const { counter } = useSelector((state) => state.counter);
  const { channels } = useSelector((state) => state.channel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  return (
    <div>
      <h1>Rudex</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(addToNum(10))}>+10</button>
      <ul>
        {channels.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Rudex;
