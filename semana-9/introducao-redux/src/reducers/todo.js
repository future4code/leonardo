const initialState = [
	{
		id: 1,
		text: "teste1",
		completed:false
	}, {
		id: 2,
		text: "teste2",
		completed:true
	}
]


export const todoReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type){
		case 'ADD_TODO':
			const newTodo = {
				text: action.payload.text,
				id: Date.now(),
				completed:false
			}	
		return [ ...state, newTodo]
		default:
			return state
	}
}