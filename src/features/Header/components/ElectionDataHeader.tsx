import { IoCaretDownSharp } from "react-icons/io5";

import { Flex, Text } from "@chakra-ui/react";

import { Menu } from "../../../components";

export function ElectionDataHeader() {
	return (
		<Menu>
			<Menu.Button
				as={"div"}
				borderWidth={0}
				_hover={{
					bg: "brand.dark",
				}}>
				<Flex alignItems="center" gap={2}>
					<Text>Election Data</Text>
					<IoCaretDownSharp />
				</Flex>
			</Menu.Button>
			<Menu.List>
				<Menu.ItemLight>Election Day Live Updates</Menu.ItemLight>
				<Menu.ItemLight>Post-Election Analysis</Menu.ItemLight>
			</Menu.List>
		</Menu>
	);
}
