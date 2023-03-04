import { Box, Container, Grid } from "@chakra-ui/react";

import FooterDetails from "./components/FooterDetails";
import FooterLinks from "./components/footerLinks";

export default function Footer() {
	return (
		<Box bg="brand.gray" py="8">
			<Container>
				<Grid templateColumns={"repeat(5, 1fr)"} rowGap={8} columnGap={4}>
					<FooterDetails />
					<FooterLinks />
				</Grid>
			</Container>
		</Box>
	);
}
