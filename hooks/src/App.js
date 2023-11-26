import "./App.css";
import Todos from "./useReducer/useReducerHook";
import UsersDashboard from "./useContext/usersDashboard";
import Users from "./useMemo/Users";
import Counter from "./useCallback/Counter";

function App() {
  return (
    <div className="text-center mt-5">
      <Counter />
      <Users />
      <UsersDashboard />
      <Todos />
    </div>
  );
}

export default App;
