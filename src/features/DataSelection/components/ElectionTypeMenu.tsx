

import { Flex } from '@chakra-ui/react';

import { Menu } from '../../../components';

export function ElectionTypeMenu() {
  return (
		<Menu>
			<Menu.Button w="full">
				<Flex>Presidential</Flex>
			</Menu.Button>
			<Menu.List>
				<Menu.Item>Presidential</Menu.Item>
				<Menu.Item>Gubernatorial</Menu.Item>
				<Menu.Item>Senate</Menu.Item>
				<Menu.Item>House of Representatives</Menu.Item>
			</Menu.List>
		</Menu>
  );
}
