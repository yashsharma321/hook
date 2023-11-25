import "./App.css";
import Todos from "./useReducer/useReducerHook";
import UsersDashboard from "./useContext/usersDashboard";

function App() {
  return (
    <div className="text-center mt-5">
      <UsersDashboard />
      <Todos />
    </div>
  );
}

export default App;
