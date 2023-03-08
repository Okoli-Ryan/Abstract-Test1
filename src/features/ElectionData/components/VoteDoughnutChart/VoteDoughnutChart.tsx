import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Center, GridItem, Text, VStack } from '@chakra-ui/react';

import { usePageContainerContext } from '../../../PageContainer/context';
import { options, ParseData } from './VoteDoughnutChart.data';

ChartJS.register(ArcElement, Tooltip, Legend);

export function VoteDoughnutChart() {

    const { presidentalResults} = usePageContainerContext()
    const data = useMemo(() => ParseData(presidentalResults), [presidentalResults])
    const totalCount = presidentalResults.reduce((prev, curr) => prev + curr.candidates_vote, 0)

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
						{totalCount}
					</Text>
				</VStack>
			</Center>
		</GridItem>
	);
}
