export default function reducer(todos=[], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.concat([action.payload]);
      break;
    case 'TOGGLE_TODO':
      return todos.map(function(item) {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      break;
    default:
      return todos;
  }
}
