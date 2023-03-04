import { Button, Flex, Image } from "@chakra-ui/react";

import Logo from "../../assets/images/Logo.png";
import { NavLinks } from "./Header.data";

export default function Header() {
	return (
		<Flex justifyContent="space-between" py="8">
			<Image src={Logo} />
			<Flex gap={2} alignItems="center">
				<Flex gap={4} alignItems="center">
					{NavLinks.map(({ component }) => (
						<>{component}</>
					))}
				</Flex>
				<Button
					variant="ghost"
					color="white"
					px="6"
					textTransform="uppercase"
					_hover={{
						bg: "gray.600",
					}}>
					Login
				</Button>
				<Button textTransform="uppercase" px="6" py="6" bg="brand.yellow" color="black">
					Signup
				</Button>
			</Flex>
		</Flex>
	);
}
