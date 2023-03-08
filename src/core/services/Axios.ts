import axios from 'axios';

axios.defaults.baseURL = "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes";

axios.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return error;
	}
);

const Endpoints = {
	GET_PRESIDENTIAL_RESULTS: "president",
	GET_MAP_RESULTS: "map",
	GET_STATE_RESULTS: "state_result",
};

export const GetAxiosData = async <T>(e: keyof typeof Endpoints): Promise<T> => {
	return axios.get("", {
		params: {
			type: Endpoints[e],
		},
	});
};
