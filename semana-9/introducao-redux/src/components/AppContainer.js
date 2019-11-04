import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import { store } from '../store'
import styled from 'styled-components'



export class AppContainer extends React.Component {
	

	render() {
		
		return (
		
			<appWrapper>
				<Header />
				<TodoList />
			</appWrapper> 
		
		)
	}
}

