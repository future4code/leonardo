import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}

const profileToSwipe = profile => {
	return {
	type: "SET_PROFILE",
	payload: {
		profile: profile
	}
}
};

export const getProfileToSwipe = () => async (dispatch, getState) => {
	const response = await axios.get(
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/person"
	);

	dispatch(profileToSwipe(response.data.profile));
};

export const chooseProfile = () => async (dispatch, getState) => {


}

const matches = matches => {
	return {
		type: "SET_MATCHES",
		payload: {
			matches: matches
		}
	}
}

export const getMatches = () => async (dispatch, getMatches) => {
	const response = await axios.get(
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/matches"
	);

	dispatch(matches(response.data.matches));
};