import React from 'react'
import Header from './Header'
import TodoItem from '../components/TodoItem'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<Header />
			<TodoItem />
		</div>
	}
}