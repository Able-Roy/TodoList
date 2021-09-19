import React, { useState } from "react";
import { connect } from "react-redux";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import DeleteConfirmation from "./components/DeleteConfirmation";

import { toggleTodo, addTodo, editTodo } from "./store/actions/toDoActions";

function App(props) {
  const addTodos = (todo) => {
    props.addTodo(todo);
  };

  const markComplete = (index) => {
    props.toggleTodo(index);
  };

  const editTitle = (index, title) => {
    props.editTodo(index, title);
  };

  return (
    <BrowserRouter>
      <div className="parent-container">
        <div className="container top-container">
          <div className="app">
            <div className="todoform">
              <Route path="/">
                <TodoForm addTodo={addTodos} editTitle={editTitle} />
              </Route>
              <Route path="/" exact>
                <Todos
                  todos={props.todos}
                  markComplete={markComplete}
                  editTitle={editTitle}
                />
              </Route>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    addTodo: (txt) => dispatch(addTodo(txt)),
    editTodo: (id, txt) => dispatch(editTodo(id, txt)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
