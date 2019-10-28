import React from 'react'
import { createStore } from "redux";
import { useReduxState, Provider, useDispatch } from "../redux/react-redux-f4";

const initialState = {
	lista: [
		todo = {
			id: '',
			nome: '',
			concluido: '',
		}]
};


function reducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_TODO":
			return {...state	}
		case "DEL_TODO":
			return { ...state, counter: state.counter - 1 };
		case "EDIT":
			return { lista: [] };
		case "RESET":
			return { lista: [] };
		case "COMPLETE_TODO":
			return { lista:[]};
		case "COMPLETE_ALL_TODOS":
			return { lista:[]};
		case "FILTER":
			return { lista: [] };
		default:
			return state;
	}
}

const store = createStore(reducer);


export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			
		</div>
	}
}