import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  addToNum,
} from "../../store/modules/counterStore";
import { fetchChannels } from "../../store/modules/channelStore";
import { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";

function ReList() {
  const { counter } = useSelector((state) => state.counter);
  const { channels } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  //   searchParams传参方式
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  //   params传参方式
  const params = useParams();
  const paramsId = params.id;

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  return (
    <div>
      <h1>Rudex</h1>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>paramsId: {paramsId}</p>
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

export default ReList;
