import React from 'react';

exports.TodoList = React.createClass({
  render: function() {
    return (
      <div>
        <AddTodo addTodo={this.props.addTodo}/>
        <Todos toggleTodo={this.props.toggleTodo} todos={this.props.todos} />
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
  render: function() {
    return (
      <ul>
        {this.props.todos.map(this.renderTodo)}
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
