import { useReducer } from "react";
import TodoList from "./todolist";

export const TODOS_ACTION = {
  ADD_TASK: "add_task",
  DELETE_TASK: "delete_task",
  RESET_TASK: "reset_task",
};

function reducer(state = [], action) {
  //let mydata = Object.assign([], state);

  switch (action.type) {
    case TODOS_ACTION.ADD_TASK:
      return [...state, { id: state.length + 1, name: action.payload }];

    case TODOS_ACTION.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case TODOS_ACTION.RESET_TASK:
      return init(action.payload);

    default:
      return state;
  }
}

const initialState = [];

const init = (initialState) => {
  // somelogic to generate the initialState
  return initialState;
};

const Todos = () => {
  const [todo, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div className="container">
      <div className="row text-center mt-5">
        <div className="col-lg-4 offset-4">
          <h4 className="text-primary mb-4">Todo List {todo.length}</h4>

          <div className="row">
            <div className="col-lg-4">
              <label className="form-label">Enter a task:</label>
            </div>
            <div className="col-lg-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="taskInput"
                  onBlur={(e) =>
                    dispatch({
                      type: TODOS_ACTION.ADD_TASK,
                      payload: e.target.value,
                    })
                  }
                />
                <button
                  className="btn btn-info"
                  onClick={() =>
                    dispatch({
                      type: TODOS_ACTION.RESET_TASK,
                      payload: initialState,
                    })
                  }
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <hr />
          <TodoList todo={todo} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default Todos;

/**
 * redux takes previous state and action as argument and return a new state.
 * const [todo, dispatch] = useReducer(reducer, []);
 * could be also like this, but for proper explanation we have wriiten all three parameters separately.
 * init is a function, it takes initialState as argument and manipulates initialState.

// CGPT Suggested code for clering the input field after adding the task

const Todos = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  const [newTask, setNewTask] = useState(""); // State for the new task

  const handleAddTask = () => {
    dispatch({ type: "ADD_TASK", data: newTask });
    setNewTask(""); // Clear the input field after adding task
  }
    <input
    type="text"
    value={newTask} // Controlled input
    onChange={(e) => setNewTask(e.target.value)}
    onBlur={handleAddTask}
    />

 */
