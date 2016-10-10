import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo, filterTodos } from './actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      filterTodos: action => dispatch(filterTodos(action))
    };
  }
)(components.TodoList);
