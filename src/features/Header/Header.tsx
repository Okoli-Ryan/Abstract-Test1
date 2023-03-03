import { Box, Flex, Link } from '@chakra-ui/react';

export default function Header() {
	return (
		<Flex justifyContent="space-between">
			<Box>Title</Box>
			<Flex gap={4}>
				{NavLinks.map((el) => (
					<Link color="white" fontSize={18}>{el.name}</Link>
				))}
			</Flex>
		</Flex>
	);
}

const NavLinks = [
	{
		name: "About us",
	},
	{
		name: "Our Communities",
	},
	{
		name: "Election Data",
	},
	{
		name: "E-Buddy",
	},
	{
		name: "Veo platform",
	},
	{
		name: "Login",
	},
	{
		name: "Signup",
	},
];
