import { Box, Grid } from "@chakra-ui/react";

import { VoteDoughnutChart } from "./components";
import { ElectedMembers } from "./components/ElectedMembers";
import { NigerianCandidateMap } from "./components/NigerianCandidateMap";

export default function ElectionData() {
	return (
		<Box className="bordered" p="8" mt="8">
			<Grid
				templateColumns="repeat(36, 1fr)"
				rowGap={6}
				columnGap={{
					base: 0,
					lg: 6,
				}}
				w="full">
				<VoteDoughnutChart />
				<NigerianCandidateMap />
				<ElectedMembers />
			</Grid>
		</Box>
	);
}
