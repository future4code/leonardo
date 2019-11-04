export const addTodo = (id) => {
	return {
		type: "ADD_TODO",
		payload: {
			id: id
		}
	};
};

export const deleteTodo = id => {
	return {
		type: "DELETE_TODO",
		payload: {
			id: id
		}
	};
};

export const editTodo = (id, text) => {
	return {
		type: "EDIT_TODO",
		payload: {
			id: id,
			text: text
		}
	};
};

export const toggleComplete = id => {
	return {
		type: "COMPLETE_TODO",
		payload: {
			id: id
		}
	};
};

export const completeAllTodos = () => {
	return {
		type: "COMPLETE_ALL_TODOS",

	};
};

export const clearCompleteTodo = () => {
	return {
	  type: "CLEAR_COMPLETE_TODO",
	  
	};
  };

  export const filterTodo = filter => {
	return {
	  type: "FILTER_TODO",
	  payload: {
		filter: filter
	  }
	};
  };

  export const updateTodoTitle = (newTitle) => ({
	  type:"UPDATE_TODO_TITLE",
	  payload: {
		  text: newTitle
	  }
  })