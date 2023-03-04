import { useState } from "react";

import { Flex } from "@chakra-ui/react";

import { Menu } from "../../../components";

export function ElectionTypeMenu() {
	const [option, setOption] = useState(options[0]);

	return (
		<Menu>
			<Menu.Button w="full">
				<Flex>{option}</Flex>
			</Menu.Button>
			<Menu.List>
				{options.map((el) => (
					<Menu.Item key={el} onClick={() => setOption(el)}>
						{el}
					</Menu.Item>
				))}
			</Menu.List>
		</Menu>
	);
}

const options = ["Presidential", "Gubernatorial", "Senate", "House of Representatives"];
