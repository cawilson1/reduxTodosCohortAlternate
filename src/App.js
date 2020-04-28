import React from "react";
// import "./App.css";
import Footer from "./components/Footer";
import AddTodoContainer from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodoContainer />
        <VisibleTodoList />
        <Footer />
      </header>
    </div>
  );
}

export default App;
