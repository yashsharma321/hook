import { TODOS_ACTION } from "./useReducerHook";
import { useContext } from "react";
import TodosContext from "../context/TodosContext";

//Removed props and used useContext Hooks with useReducer.
//const TodoList = (props) => {
const TodoList = () => {
  const { todo, dispatch } = useContext(TodosContext);
  return (
    <>
      {/* {props.todo?.map((task, index) => { */}
      {todo.map((task, index) => {
        return (
          <div key={task.id} className="mb-3">
            {task.name}
            <button
              className="btn btn-warning btn-sm ms-2"
              onClick={dispatch.bind(this, {
                // onClick={props.dispatch.bind(this, {
                type: TODOS_ACTION.DELETE_TASK,
                payload: task.id,
              })}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
