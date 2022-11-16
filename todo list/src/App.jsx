import { useState } from "react";
import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import { nanoid } from "nanoid";
import List from "./components/List";
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState({
    id: nanoid(),
    name: "",
    status: 0,
  });
  const deleteTask = (id) => {
    setTodos([...todos.filter((a) => a.id !== id)]);
  };
  const editTask = (id) => {
    let f = todos.find((a) => a.id === id);
    f.status = 1;
    setTodos([...todos]);
  };
  const saveEditedTask = (id) => {
    let f = todos.find((a) => a.id === id);
    f.status = 0;
    setTodos([...todos]);
  };
  const changeName = (id, e) => {
    let f = todos.find((a) => a.id === id);
    f.name = e.target.value;
    setTodos([...todos]);
  };
  const completeTask = (id, e) => {
    let f = todos.find((a) => a.id === id);
    f.status = e.ctrlKey ? 0 : 2;
    setTodos([...todos]);
  };
  return (
    <main>
      <section className="todos">
        <header>
          <h1>Todo List</h1>
        </header>
        <AddNewTodo
          setTodos={setTodos}
          todos={todos}
          task={task}
          setTask={setTask}
        />
        <ul>
          {todos.length ? (
            todos.map((a) => (
              <List
                completeTask={(e) => completeTask(a.id, e)}
                saveEditedTask={() => saveEditedTask(a.id)}
                changeName={(e) => changeName(a.id, e)}
                editTask={() => editTask(a.id)}
                deleteTask={() => deleteTask(a.id)}
                key={a.id}
                task={a}
              />
            ))
          ) : (
            <h1>Empty</h1>
          )}
        </ul>
      </section>
    </main>
  );
}
export default App;