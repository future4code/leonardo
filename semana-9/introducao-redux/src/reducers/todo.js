const initialState = {
	allTodos: [],
	currentTodoText:''
}

export const todos = (state = initialState, action) => {
	switch (action.type){
		case 'ADD_TODO':
			const newTodo = { 
				text: state.currentTodoText,
				id: action.payload.id,
				completed:false}	
		
		const newTodos = [ ...state.allTodos, newTodo]
		return { ...state, allTodos: newTodos, currentTodoText:'' }
		case 'UPDATE_TODO_TITLE':
			return {...state, currentTodoText: action.payload.text}
		default:
			return state
	}
}