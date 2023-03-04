import { Link } from "@chakra-ui/react";

import { ElectionDataHeader, OurCommunities } from "./components";

export const NavLinks = [
	{
		component: (
			<Link textTransform="uppercase" fontWeight="bold">
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
			<Link textTransform="uppercase" fontWeight="bold">
				E-Buddy
			</Link>
		),
	},
	{
		component: (
			<Link textTransform="uppercase" fontWeight="bold">
				Veo Platform
			</Link>
		),
	},
];
