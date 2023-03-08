//@ts-nocheck

export function transformStateObject() {
    const transformedObj = {};
    
    for (const [mapId, stateData] of Object.entries(window.mapdata.state_specific)) {
      const { name, ...rest } = stateData;
      transformedObj[name.toUpperCase()] = { map_id: mapId, ...rest };
    }
    
    return transformedObj;
  }

  const TransformedMapStates = transformStateObject()

  export {TransformedMapStates}
  