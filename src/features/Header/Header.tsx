import { Box, Button, Flex, Image } from "@chakra-ui/react";

import Logo from "../../assets/images/Logo.png";
import { NavLinks } from "./Header.data";

export default function Header() {
	return (
		<Flex justifyContent="space-between" py="8">
			<Image src={Logo} objectFit="contain" />
			<Flex gap={2} alignItems="center">
				<Flex
					gap={4}
					alignItems="center"
					display={{
						base: "none",
						lg: "flex",
					}}>
					{NavLinks.map(({ component }) => (
						<Box px={2}>{component}</Box>
					))}
				</Flex>
				<Button
					variant="ghost"
					color="white"
					fontWeight="bold"
					p="6"
					textTransform="uppercase"
					fontSize={{
						base: "small",
						xl: "lg",
					}}
					_hover={{
						bg: "gray.600",
					}}>
					Login
				</Button>
				<Button
					textTransform="uppercase"
					p="6"
					fontWeight="bold"
					bg="brand.yellow"
					color="black"
					fontSize={{
						base: "small",
						xl: "lg",
					}}>
					Signup
				</Button>
			</Flex>
		</Flex>
	);
}
