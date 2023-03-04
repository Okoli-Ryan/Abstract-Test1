import { Link } from "@chakra-ui/react";

import { ElectionDataHeader, OurCommunities } from "./components";

export const NavLinks = [
	{
		component: (
			<Link
				textTransform="uppercase"
				fontWeight="bold"
				fontSize={{
					base: "x-small",
					xl: "sm",
				}}>
				About us
			</Link>
		),
	},
	{
		component: <OurCommunities />,
	},
	{
		component: <ElectionDataHeader />,
	},
	{
		component: (
			<Link
				textTransform="uppercase"
				fontWeight="bold"
				fontSize={{
					base: "x-small",
					xl: "sm",
				}}>
				E-Buddy
			</Link>
		),
	},
	{
		component: (
			<Link
				textTransform="uppercase"
				fontWeight="bold"
				fontSize={{
					base: "x-small",
					xl: "sm",
				}}>
				Veo Platform
			</Link>
		),
	},
];
