import { Grid, GridItem, Link, Text, VStack } from "@chakra-ui/react";

import { FooterLinksData } from "./components/FooterLinks.data";

export default function FooterLinks() {
	return (
		<GridItem
			colSpan={{
				base: 5,
				md: 3,
			}}>
			<Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
				{FooterLinksData.map((linkData, key) => (
					<VStack gap="2" key={key}>
						<Text fontSize="lg">{linkData.header}</Text>
						<VStack w="full" gap="2">
							{linkData.links.map((link) => (
								<Link color="white" w="full" key={link}>
									{link}
								</Link>
							))}
						</VStack>
						{linkData.CustomFooter}
					</VStack>
				))}
			</Grid>
		</GridItem>
	);
}
