import { Button, Flex } from '@chakra-ui/react';

import { Menu } from '../../../components';

export function ElectionOptionMenu() {
	return (
		<Menu>
			<Menu.Button w="full">
				<Flex>Election Data</Flex>
			</Menu.Button>
			<Menu.List>
				<Menu.Item>Pre-Election</Menu.Item>
				<Menu.Item>Election Day Live Updates</Menu.Item>
				<Menu.Item>Post Election Analysis</Menu.Item>
			</Menu.List>
		</Menu>
	);
}
