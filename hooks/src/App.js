import "./App.css";
import Todos from "./useReducer/useReducerHook";
import UsersDashboard from "./useContext/usersDashboard";
import Users from "./useMemo/Users";

function App() {
  return (
    <div className="text-center mt-5">
      <Users />
      <UsersDashboard />
      <Todos />
    </div>
  );
}

export default App;
