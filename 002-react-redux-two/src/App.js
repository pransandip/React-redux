import ChangeDate from "./hooks/ChangeDate";
import ReducerEx from "./hooks/ReducerEx";

function App() {
  return (
    <div>
      <ChangeDate />
      <ChangeDate />
      {false && <ReducerEx />}
    </div>
  );
}

export default App;
