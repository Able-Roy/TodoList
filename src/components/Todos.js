import React from 'react';

import Todo from './Todo';

const Todos = ({todos, markComplete, editTitle}) => {
    return (
        <div className={"todo-list"}>
                {
                    todos.map((todo, index) => (
                        <Todo todo={todo} key={index} index={index} markComplete={markComplete} editTitle={editTitle}/>
                    ))
                }
        </div>
    );
};

export default Todos;
