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
                type: "delete_task",
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
