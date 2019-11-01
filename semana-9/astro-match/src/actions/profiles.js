import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}

export const profileToSwipe = profileToSwipe => {
	return {
	type: "SET_PROFILE",
	payload: {
		profileToSwipe
	}
}
};

export const getProfileToSwipe = () => async (dispatch, getState) => {
	const response = await axios.get(
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/person"
	);

	dispatch(profileToSwipe(response.data.profile));
};



const matches = matches => {
	return {
		type: "SET_MATCHES",
		payload: {
			matches: matches
		}
	}
}

export const getMatches = () => async (dispatch, getState) => {
	const response = await axios.get(
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/matches"
	);

	dispatch(matches(response.data.matches));
};

export const chooseProfile = (id, option) => async (dispatch, getState) => {
	
	
	const newMatch = {
		id: id,
		choice: option
	}
	const response = await axios.post(
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/choose-person", newMatch
	);
	dispatch(getProfileToSwipe())

}