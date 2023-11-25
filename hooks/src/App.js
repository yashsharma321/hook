import "./App.css";
import Todos from "./useReducer/useReducerHook";
import UsersDashboard from "./useContext/UsersDashboard";

function App() {
  return (
    <div className="text-center">
      <UsersDashboard />
      <Todos />
    </div>
  );
}

export default App;
