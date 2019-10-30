import React from 'react'
import Header from './Header'
import TodoItem from '../components/TodoItem'
import TaskList from './TodoList'
import TodoList from './TodoList'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<Header />
			<TodoList />
		</div>
	}
}