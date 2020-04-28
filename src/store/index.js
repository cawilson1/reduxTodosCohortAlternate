import { createStore } from "redux";
import todoApp from "../reducers";

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "../actions";

function run() {
  const store = createStore(todoApp);
  //initial state
  console.log(store.getState());

  //console log for state change
  const unsubscribe = store.subscribe(() => console.log(store.getState()));

  store.dispatch(addTodo("Learn abt actions"));
  store.dispatch(addTodo("Learn abt reducers"));
  store.dispatch(addTodo("Learn abt store"));
  store.dispatch(toggleTodo(0));
  store.dispatch(toggleTodo(2));
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

  unsubscribe();
}

export default run;
