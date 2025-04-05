import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet.</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))
      )}
    </div>
  );
};

export default TodoList;
