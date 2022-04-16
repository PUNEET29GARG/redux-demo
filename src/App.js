import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./actions/action";
export default function App() {
  const myState = useSelector((state) => state.IncDec);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Increment-Decrement Counter</h2>
      <h3>Using React-Redux</h3>
      <div>
        <button onClick={() => dispatch(Increment())}>+</button>
        <input type="text" value={myState} />
        <button onClick={() => dispatch(Decrement())}>-</button>
        <br />
        <br />
        {myState !== 10 ? myState : null} <br />
      </div>
    </div>
  );
}
