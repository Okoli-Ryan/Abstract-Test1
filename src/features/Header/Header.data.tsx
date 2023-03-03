import { Button, Link } from "@chakra-ui/react";

import { ElectionDataHeader, OurCommunities } from "./components";

export const NavLinks = [
	{
		component: <Link>About us</Link>,
	},
	{
		component: <OurCommunities />,
	},
	{
		component: <ElectionDataHeader />,
	},
	{
		component: <Link>E-Buddy</Link>,
	},
	{
		component: <Link>Veo Platform</Link>,
	},
	{
		component: (
			<Button variant="ghost" color="white">
				Login
			</Button>
		),
	},
	{
		component: (
			<Button bg="brand.yellow" color="black">
				Signup
			</Button>
		),
	},
];
