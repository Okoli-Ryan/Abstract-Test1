//@ts-nocheck
import { useEffect } from 'react';

import { TransformedMapStates } from '../../core/Utils';
import { usePageContainerContext } from '../PageContainer/context';

export default function Map() {
	const { mapResult } = usePageContainerContext();
    console.log(window.mapdata)

	useEffect(() => {
		if (mapResult.length === 0) return;

        mapResult.forEach(result => {
            const mapId = TransformedMapStates[result.name].map_id
            window.mapdata.state_specific[mapId].description = `${result.candidate_votes} votes`
        });

        window.countrymap.refresh()
		
	}, [mapResult]);
	return <div id="map" />;
}
