import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 p-2 rounded border border-gray-300"
        placeholder="Add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
