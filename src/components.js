import React from 'react';

exports.TodoList = React.createClass({
  render: function() {
    return (
      <div>
        <AddTodo addTodo={this.props.addTodo} />
        <Todos toggleTodo={this.props.toggleTodo} todos={this.props.todos} />
        <FilterTodos filterTodos={this.props.filterTodos} clearCompleted={this.props.clearCompleted}/>
      </div>
    )
  }
});

var FilterTodos = React.createClass({
  setEverything: function() {
    this.props.filterTodos("EVERYTHING");
  },
  setCompleted: function() {
    this.props.filterTodos("COMPLETED");
  },
  setActive: function() {
    this.props.filterTodos("ACTIVE");
  },
  clearCompleted: function() {
    this.props.clearCompleted();
  },
  render: function() {
    return (
      <div>
        <a onClick={this.setEverything}>Everything</a> -
        <a onClick={this.setCompleted}>Completed</a> -
        <a onClick={this.setActive}>Active</a> - <a onClick={this.clearCompleted}>Clear</a>
      </div>
    )
  }
});

var Todo = React.createClass({
  setDone: function() {
    this.props.toggleTodo(this.props.item.id);
  },
  render: function() {
    return (
      <li className={this.props.item.isDone ? "strike" : ""} onClick={this.setDone}>{this.props.item.text}</li>
    )
  }
});

var Todos = React.createClass({
  renderTodo: function(item) {
    return <Todo toggleTodo={this.props.toggleTodo} key={item.id} item={item} />
  },
  isVisible: function(item) {
    switch(this.props.todos.visibility) {
      case "EVERYTHING":
        return true;
      case "COMPLETED":
        return item.isDone;
      case "ACTIVE":
        return !item.isDone;
      default:
        return false;
    };
  },
  render: function() {
    return (
      <ul>
        {this.props.todos.todos.filter(this.isVisible).map(this.renderTodo)}
      </ul>
    )
  }
});

var AddTodo = React.createClass({
  add: function(e) {
    if (e.which === 13 && e.target.value.trim() !== "") {
      this.props.addTodo(e.target.value);
      e.target.value = "";
    }
  },
  render: function() {
    return (
      <div>
        <input type="text" onKeyDown={this.add} />
      </div>
    )
  }
});

