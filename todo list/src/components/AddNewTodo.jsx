import { nanoid } from "nanoid";
function AddNewTodo({ task, setTask, setTodos, todos }) {
  const handleInput = (e) => {
    setTask({ ...task, name: e.target.value });
  };
  const saveTodo = () => {
    setTodos([...todos, task]);
    setTask({
      id: nanoid(),
      name: "",
      status: 0,
    });
  };
  const check = todos.some((a) => a.status === 1);
  return (
    <div className="add_new">
      <input
        onChange={handleInput}
        disabled={check}
        value={task.name}
        type="text"
        placeholder="New Todo"
      />
      <button
        disabled={task.name.trim().length < 3 || check}
        onClick={saveTodo}
      >
        Save
      </button>
    </div>
  );
}

export default AddNewTodo;