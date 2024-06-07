import { getTodos } from "../store/reducer/todo";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);

  const getTodoHandler = () => {
    dispatch(getTodos());
    console.log(todos);
  };

  return (
    <>
      <button className="todo-btn" onClick={getTodoHandler}>
        Get Todos
      </button>
      <section>
        { isLoading && <p>Getting Todos ...</p>}
        {!isLoading && todos.map((todo) => <p>{todo.title}</p>)}
        { !isLoading && todos.length < 1 && <p>Click Get Todos to get the datas </p>}
      </section>
    </>
  );
};

export default Todo;
