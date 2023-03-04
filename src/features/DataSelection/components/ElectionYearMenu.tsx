

import { useState } from "react";

import { Flex } from '@chakra-ui/react';

import { Menu } from '../../../components';

const years = generateYearsArray();

export function ElectionYearMenu() {

    const [option, setOption] = useState(years[0]);

	return (
		<Menu>
			<Menu.Button w="full" maxW={32}>
				<Flex>{option}</Flex>
			</Menu.Button>
			<Menu.List>
				{years.map((year) => (
					<Menu.Item onClick={() => setOption(year)} key={year}>
						{year}
					</Menu.Item>
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
