const initialState = [
	{
		id: 1,
		text: "teste1"
	}, {
		id: 2,
		text: "teste2"
	}
]


export const todoReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type){
		case 'ADD_TODO':
			const newTodo = {
				text: action.payload.text,
				id: Date.now()
			}	
		return [newTodo, ...state]
		default:
			return state
	}
}