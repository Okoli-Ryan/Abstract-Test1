import { useState } from "react";

import { Button, Flex } from "@chakra-ui/react";

import { Menu } from "../../../components";

export function ElectionOptionMenu() {
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

const options = ["Pre-Election", "Election Day Live Updates", "Post Election Analysis"];
