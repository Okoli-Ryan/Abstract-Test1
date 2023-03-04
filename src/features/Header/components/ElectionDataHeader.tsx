import { IoCaretDownSharp } from "react-icons/io5";

import { Button } from "@chakra-ui/react";

import { Menu } from "../../../components";

export function ElectionDataHeader() {
	return (
		<Menu>
			<Menu.Button
				as={Button}
				color="white"
				fontWeight="bold"
				fontSize={{
					base: "x-small",
					xl: "sm",
				}}
				textTransform="uppercase"
				rightIcon={<IoCaretDownSharp />}
				borderWidth={0}
				px={0}
				_hover={{
					bg: "unset",
				}}>
				Election Data
			</Menu.Button>
			<Menu.List>
				<Menu.ItemLight>Election Day Live Updates</Menu.ItemLight>
				<Menu.ItemLight>Post-Election Analysis</Menu.ItemLight>
			</Menu.List>
		</Menu>
	);
}
