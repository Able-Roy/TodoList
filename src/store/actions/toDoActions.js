let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  text
});

export const editTodo = (id,text) => ({
    type: "EDIT_TODO",
    id,
    text
  });

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});