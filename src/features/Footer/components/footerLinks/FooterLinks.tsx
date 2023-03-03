import { Grid, GridItem, Link, Text, VStack } from "@chakra-ui/react";

import { FooterLinksData } from "./components/FooterLinks.data";

export default function FooterLinks() {
	return (
		<GridItem colSpan={3}>
			<Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
				{FooterLinksData.map((linkData) => (
					<VStack gap="2">
						<Text fontSize="lg">{linkData.header}</Text>
						<VStack w="full" gap="2">
							{linkData.links.map((link) => (
								<Link color="white" w="full">
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
