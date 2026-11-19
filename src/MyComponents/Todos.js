
import React from 'react';

export const Todos = (props) => {
    return (
        <div className="container">
            <h3>Todos List</h3>

            {props.todos.map((todo) => {
                return (
                    <div key={todo.sno}>
                        <h4>{todo.title}</h4>
                        <p>{todo.desc}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};
