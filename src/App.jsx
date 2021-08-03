import React from "react";
import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
