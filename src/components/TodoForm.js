import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useLocation,useHistory } from 'react-router-dom';

const TodoForm = ({addTodo,editTitle, todos}) =>{
    
    const location = useLocation();
    const history = useHistory();
    const id = new URLSearchParams(location.search).get('id');
    const toDoId = new URLSearchParams(location.search).get('id');
    let todo = '';

    let AddTxt = true;
    if(location.pathname === '/Edit'){
        todo = toDoId ? todos.filter(todo => toDoId == todo.id ): '';
        todo = todo[0].text;
        AddTxt = false;
    }

    const [value, setvalue] = useState('');

    useEffect(()=> {
        setvalue(todo);
    },[todo])
    
    const handleChange = (e) => {   //to handle change in form input (when user is typing)
        setvalue(e.target.value);         //e.target gives the value of current value the user is typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();     //to prevent DOM from reloading the page
        if (!value)             //if user submits empty form, do nothing
            return;
        if(location.pathname === '/Edit'){
            editTitle(toDoId, value);
            history.push('/');
        }
        else{
            addTodo(value);
        }
        setvalue('');           //set the value to be empty again to get ready for next input
    };

    return(
        <div className={"container"}>
            <div className="app-title text-center">Todo App</div>
            <form onSubmit={handleSubmit} className={"form-group row todo-form"}>
                <input className={"form-control col-md-8 "} type={"text"} placeholder={"Add a ToDo"} value={value} onChange={handleChange}/>
                <input className={"form-control btn-primary col-md-4 submit-button"} type={"submit"} value={AddTxt?"Add":"Save"}/>
            </form>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return{
        todos: state.todos
    }
}
export default connect(mapStateToProps)(TodoForm);