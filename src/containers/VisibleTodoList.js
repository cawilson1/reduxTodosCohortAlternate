import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    boundToggleTodo: id => {
      //essentially creates a composed callback function that can be called later. toggleTodo(id) returns an object given an id, dispatch says to update, but the dispatch is in a callback to be called later
      dispatch(toggleTodo(id));
    }
  };
};

//connect() "does not modify the component class passed to it, instead, it returns a new, connected component class that wraps the component you passed in."
//notice this only runs once. the TodoList runs every time the state updates though
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
