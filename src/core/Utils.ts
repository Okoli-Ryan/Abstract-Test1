//@ts-nocheck

/**
 * Converts state_specific field in mapdata so the state name is the key of the state object
 * @example
 *  {NGA2899: {name: "Borno"}}
 * converts to
 * {Borno: {map_id: "NGA2899"}}
 *
 */
export function transformStateObject() {
	const transformedObj = {};

	for (const [mapId, stateData] of Object.entries(window.mapdata.state_specific)) {
		const { name, ...rest } = stateData;
		transformedObj[name.toUpperCase()] = { map_id: mapId, ...rest };
	}

	return transformedObj;
}

const TransformedMapStates = transformStateObject();

export { TransformedMapStates };
