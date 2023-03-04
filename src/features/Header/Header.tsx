import { Box, Button, Flex, Image } from "@chakra-ui/react";

import Logo from "../../assets/images/Logo.png";
import { NavLinks } from "./Header.data";

export default function Header() {
	return (
		<Flex justifyContent="space-between" py="8">
			<Image src={Logo} objectFit="contain" />
			<Flex gap={2} alignItems="center">
				<Flex gap={4} alignItems="center">
					{NavLinks.map(({ component }) => (
						<Box px={2}>{component}</Box>
					))}
				</Flex>
				<Button
					variant="ghost"
					color="white"
					p="6"
					textTransform="uppercase"
					_hover={{
						bg: "gray.600",
					}}>
					Login
				</Button>
				<Button textTransform="uppercase" p="6" bg="brand.yellow" color="black">
					Signup
				</Button>
			</Flex>
		</Flex>
	);
}
