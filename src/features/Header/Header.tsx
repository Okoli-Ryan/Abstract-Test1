import { Button, Flex, Image } from "@chakra-ui/react";

import Logo from "../../assets/images/Logo.png";
import { NavLinks } from "./Header.data";

export default function Header() {
	return (
		<Flex justifyContent="space-between" py="8">
			<Image src={Logo} />
			<Flex gap={4} alignItems="center">
				{NavLinks.map(({ component }) => (
					<Button variant="ghost" color="white" fontSize={18}>
						{component}
					</Button>
				))}
			</Flex>
		</Flex>
	);
}
