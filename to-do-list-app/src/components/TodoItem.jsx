import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo, index }) => {
  const { completeTodo, removeTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    if (editedText.trim()) {
      editTodo(index, editedText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    else if (e.key === "Escape") setIsEditing(false);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-center p-4 mb-2 rounded shadow transition-all ${todo.completed ? "bg-green-100" : "bg-white"
        }`}
    >
      <div className="flex-1 w-full sm:w-auto">
        {isEditing ? (
          <input
            className="w-full p-2 border border-gray-300 rounded"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span
            className={`text-lg ${todo.completed ? "line-through text-gray-400" : ""
              }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-2 sm:mt-0 sm:ml-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="cursor-pointer bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => completeTodo(index)}
              className={`cursor-pointer px-3 py-1 rounded text-white ${todo.completed
                ? "bg-green-500 hover:bg-green-600"
                : "bg-yellow-400 hover:bg-yellow-500"
                }`}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>

            {!todo.completed && (
              <button
                onClick={() => setIsEditing(true)}
                className="cursor-pointer bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => removeTodo(index)}
              className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
