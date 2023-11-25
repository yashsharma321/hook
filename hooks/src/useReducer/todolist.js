import { TODOS_ACTION } from "./useReducerHook";

const TodoList = (props) => {
  return (
    <>
      {props.todo?.map((task, index) => {
        return (
          <div key={task.id} className="mb-3">
            {task.name}
            <button
              className="btn btn-warning btn-sm ms-2"
              onClick={props.dispatch.bind(this, {
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
