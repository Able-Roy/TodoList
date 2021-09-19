import React,{useState} from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

import {deleteTodo} from '../store/actions/toDoActions'

import DeleteConfirmation from "./DeleteConfirmation";

const Todo = ({ todo, index, markComplete, editTitle,deleteTodo }) => {
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  // Handle the displaying of the modal based on type and id
  const showDeleteModal = () => {
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = (id) => {
    deleteTodo(id);
    setDisplayConfirmationModal(false);
  };
  return (
    <div className="todo">
      <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <input
          type={"checkbox"}
          onChange={() => markComplete(index)}
          name={"completed"}
          id={todo.id}
        />{" "}
        {todo.text}
      </p>
      <div className={"toDoAction"}>
        <Link to={`/Edit?id=${todo.id}`} className="btn btn-link">
          edit
        </Link>
        <button to="/" className="btn btn-link" onClick={showDeleteModal}>
          Delete
        </button>
      </div>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        message="Are You Sure"
        id={todo.id}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id))
    };
  };
export default connect(null,mapDispatchToProps)(Todo);
