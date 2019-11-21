import axios from 'axios'
import Axios from 'axios';
import {Feed} from '../containers/Feed/Feed'

export const getPosts = () => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");
	try {
		const response = await axios.get(
			"https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts",
			{
				headers: {
					auth: token
				}
			}
		);
		dispatch(posts(response.data.posts));
	} catch (e) {
		window.alert(e.message)
	}
};

export const posts = posts => {
	return {
		type: "SET_POSTS",
		payload: {
			posts
		}
	}
};

export const createPost = (title, text) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");
	const data = { title, text }
	console.log('title', title, 'text', text)
	try {

		const response = await axios.post(
			"https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts", data,
			{
				headers: {
					auth: token
				}
			}
		);
		const msg = `Post criado com sucesso`
		const variant = 'success'
		dispatch(snackBarOpen(msg, variant))
		dispatch(getPosts());
	} catch (e) {
		const msg = `Ocorreu um erro : ${e.message}`
		const variant = 'error'
		dispatch(snackBarOpen(msg, variant))
	}
}

export const postUpVote = (id) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");
	const idVote = id
	const data = { direction: +1 }
	console.log(idVote)
	try {

		const response = await axios.put(
			`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${idVote}/vote`, data,
			{
				headers: {
					auth: token
				}
			}
		);
		dispatch(getPosts());
	} catch (e) {
		window.alert(e.message)
	}
}

export const postDownVote = (id) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");
	const idVote = id
	const data = { direction: -1 }
	console.log(idVote)
	try {

		const response = await axios.put(
			`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${idVote}/vote`, data,
			{
				headers: {
					auth: token
				}
			}
		);

		dispatch(getPosts());
	} catch (e) {
		window.alert(e.message)
	}
}

export const onCloseSnackBar = () => {
	return {
		type: "SET_SNACKBAR_CLOSE"
	}
}

export const snackBarOpen = (msg, variant) => {
	return {
		type: "SET_SNACKBAR_OPEN",
		payload: {
			msg,
			variant
		}
	}
};

export const postUpComments = (commentId, postId) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");

	console.log(commentId, postId)
	const data = { direction: +1 }
	try {

		const response = await axios.put(
			`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`, data,
			{
				headers: {
					auth: token
				}
			}
		);
		try {
			const response = await Axios.get(
			  `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}`,
			  {
				headers: {
				  auth: token
				}
			  }
			);
			let feedComments = response.data.post.comments
			console.log(postId, feedComments)
			this.setState({
			  [postId]: feedComments
			})
			console.log(this.state)
		  } catch (e) {
			window.alert(e.message)
		  }
		// dispatch(comments(idVote));
		// console.log(response)
		// const teste = getState()[postId][0]
		// console.log(teste.id)
	} catch (e) {
		window.alert(e.message)
	}
}

const comments = (postId) => async () => {
	console.log(postId)
	const token = window.localStorage.getItem("token");

	try {
		const response = await Axios.get(
			`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}`,
			{
				headers: {
					auth: token
				}
			}
		);
		let feedComments = response.data.post.comments
		this.setState({
			[postId]: feedComments
		})
		console.log(this.state)
	} catch (e) {
		window.alert(e.message)
	}
}

export const postDownComments = (commentId, postId) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");

	const data = { direction: -1 }
	console.log(commentId, postId)
	try {

		const response = await Axios.put(
			`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`, data,
			{
				headers: {
					auth: token
				}
			}
		);
		const teste = getState().posts.posts
		console.log(teste)
		// dispatch(comments(postId));
	} catch (e) {
		window.alert(e.message)
	}
}

export const sendComment = (postId, text) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");
	const texto = text
	console.log(texto)
	const data = { text }
	console.log(data)
	try {

		const response = await Axios.post(
			`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment`, data,
			{
				headers: {
					auth: token
				}
			}
		);
		
	} catch (e) {
		window.alert(e.message)
	}
}