import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prev) => [{ text, completed: false }, ...prev]);
  };

  const completeTodo = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const editTodo = (index, newText) => {
    setTodos((prev) =>
      prev.map((todo, i) => (i === index ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, completeTodo, removeTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
