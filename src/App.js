import { useDispatch, useSelector } from "react-redux";
import One from "./components/One";
import Two from "./components/Two";
import { plus, minus } from "./redux/actions/actions";

function App() {
  const selector = useSelector((data) => data.plusMinus);
  const dispatch = useDispatch();

  return (
    <div style={{ width: "1140px", margin: "0 auto" }}>
      <button style={{ margin: "20px 0 5px" }} onClick={() => dispatch(plus())}>
        -
      </button>
      <h1>{selector}</h1>
      <button style={{ margin: "5px 0 20px" }} onClick={() => dispatch(minus())}>
        +
      </button>
      <hr />
      <div>
        <One />
        <Two />
      </div>
    </div>
  );
}

export default App;
