import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl p-6 rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
          My To-Do List
        </h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
