function List({
    task,
    deleteTask,
    editTask,
    completeTask,
    changeName,
    saveEditedTask,
  }) {
    return (
      <li onClick={completeTask}>
        {task.status === 1 ? (
          <div onClick={(e) => e.stopPropagation()}>
            <input onChange={changeName} value={task.name} type="text" />
            <button onClick={saveEditedTask}>Save</button>
          </div>
        ) : (
          <>
            <b
              style={{ textDecoration: task.status === 2 ? "line-through" : "" }}
            >
              {task.name}
            </b>
            <div onClick={(e) => e.stopPropagation()}>
              <button onClick={editTask}>Edit</button>
              <button onClick={deleteTask}>Delete</button>
            </div>
          </>
        )}
      </li>
    );
  }
  
  export default List;
  