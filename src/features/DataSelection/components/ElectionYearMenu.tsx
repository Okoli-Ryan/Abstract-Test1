

import { Flex } from '@chakra-ui/react';

import { Menu } from '../../../components';

const years = generateYearsArray();

export function ElectionYearMenu() {
	return (
		<Menu>
			<Menu.Button w="full">
				<Flex>2023</Flex>
			</Menu.Button>
			<Menu.List>
				{years.map((year) => (
					<Menu.Item>{year}</Menu.Item>
				))}
			</Menu.List>
		</Menu>
	);
}

function generateYearsArray() {
	const startYear = 2023;
	const endYear = 1959;
	const step = -4;
	const years = [];

	for (let year = startYear; year >= endYear; year += step) {
		years.push(year);
	}

	return years;
}
