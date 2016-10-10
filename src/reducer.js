
var initialState = {
  todos:[],
  visibility: "EVERYTHING"
};

export default function reducer(todos=initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, todos, {todos: todos.todos.concat([action.payload])});
    case 'TOGGLE_TODO':
      return Object.assign({}, todos, {todos: todos.todos.map(function(item) {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      })});
    case 'CHANGE_VISIBILITY':
      return Object.assign({}, todos, {visibility: action.payload});
    case 'REMOVE_COMPLETED':
      return Object.assign({}, todos, {todos: todos.todos.filter((item) => !item.isDone)});
    default:
      return todos;
  }
}
