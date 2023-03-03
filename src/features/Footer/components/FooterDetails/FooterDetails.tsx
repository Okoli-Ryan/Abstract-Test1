import { GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";

import Logo from "../../../../assets/images/Logo.png";

export default function FooterDetails() {
	return (
		<GridItem colSpan={2}>
			<VStack justifyContent="flex-start">
				<HStack w="full">
					<Image src={Logo} />
				</HStack>
				<Text>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria</Text>
				<Text>&#169; 2022 Hernalytics</Text>
			</VStack>
		</GridItem>
	);
}
