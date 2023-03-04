import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { Center, GridItem, Text, VStack } from "@chakra-ui/react";

import { data, options } from "./VoteDoughnutChart.data";

ChartJS.register(ArcElement, Tooltip, Legend);

export function VoteDoughnutChart() {
	return (
		<GridItem
			colSpan={{
				base: 36,
				lg: 12,
			}}
			className="bordered"
			display="flex"
			justifyContent="center"
			alignItems="center"
			p="4"
			pos="relative">
			<Doughnut data={data} options={options} />
			<Center
				borderRadius="full"
				borderWidth={1}
				w="12vw"
				h="12vw"
				minW={36}
				minH={36}
				pos="absolute"
				right={0}
				m="auto"
				top={3}
				bottom={0}
				left={0}>
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
