import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppContainer } from './components/AppContainer'
import { rootReducer } from './reducers'
import { createStore } from 'redux' 
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'


const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
	insertionPoint: document.getElementById('jss-insertion-point'),
})

const theme = createMuiTheme()

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
	return (
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Provider store={store}>
					<AppContainer />
				</Provider>
			</MuiThemeProvider>
		</JssProvider>
	)
}

export default App
