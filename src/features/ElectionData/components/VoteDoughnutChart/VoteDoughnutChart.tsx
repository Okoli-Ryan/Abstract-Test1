import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { Center, GridItem, Text, VStack } from "@chakra-ui/react";

import { data, options } from "./VoteDoughnutChart.data";

ChartJS.register(ArcElement, Tooltip, Legend);

export function VoteDoughnutChart() {
	return (
		<GridItem colSpan={3} maxH="25rem" className="bordered" p="4" pos="relative">
			<Doughnut data={data} options={options} />
			<Center
				borderRadius="full"
				borderWidth={1}
				w="13vw"
				h="13vw"
				pos="absolute"
				left="25%"
				top="25%">
				<VStack>
					<Text textAlign="center" textTransform="uppercase">
						Total Votes
					</Text>
					<Text textAlign="center" fontSize="larger" fontWeight="bold">
						168,192, 222
					</Text>
				</VStack>
			</Center>
		</GridItem>
	);
}
