import { HStack, Image } from "@chakra-ui/react";

import Instagram from "../../../../../assets/images/instagram.png";
import Twitter from "../../../../../assets/images/twitter.png";
import Whatsapp from "../../../../../assets/images/whatsapp.png";

export const FooterLinksData = [
	{
		header: "About",
		links: ["Our Story", "Blog", "About Hernalytics", "Videos"],
	},
	{
		header: "Support",
		links: ["FAQs", "Privacy Policy", "Terms of Service"],
	},
	{
		header: "Let's chat!",
		links: ["hernalytics@gmail.com", "+234 801 234 5678"],
		CustomFooter: (
			<HStack gap={4} w="full">
				<Image borderRadius="full" w="6" h="6" src={Instagram} />
				<Image borderRadius="full" w="6" h="6" src={Twitter} />
				<Image borderRadius="full" w="6" h="6" src={Whatsapp} />
			</HStack>
		),
	},
];
