import { useEffect, useState } from 'react';

import { IMapResult, IPresidentialResult, IStateResult } from '../../../core';
import { GetAxiosData } from '../../../core/services';

export const usePageContainer = () => {
	const [presidentalResults, setPresidentialResults] = useState<IPresidentialResult[]>([]);
	const [stateResult, setStateResult] = useState<IStateResult>({});
	const [mapResult, setMapResult] = useState<IMapResult[]>([]);

	useEffect(() => {
		async function getDetails() {
			const [fetchedPresidentialResults, fetchedStateResults, fetchedMapResults] =
				await Promise.allSettled([
					GetAxiosData<IPresidentialResult[]>("GET_PRESIDENTIAL_RESULTS"),
					GetAxiosData<IStateResult>("GET_STATE_RESULTS"),
					GetAxiosData<IMapResult[]>("GET_MAP_RESULTS"),
				]);

			if (fetchedPresidentialResults.status === "fulfilled")
				setPresidentialResults(fetchedPresidentialResults.value);
			if (fetchedStateResults.status === "fulfilled")
				setStateResult(fetchedStateResults.value);
			if (fetchedMapResults.status === "fulfilled")
				setMapResult(fetchedMapResults.value);
		}

		getDetails();
	}, []);

	return { presidentalResults, mapResult, stateResult };
};
