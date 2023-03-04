import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export default function NigerianMap() {
	return (
		<Box className="bordered" mt="8" pos="relative">
			<Box w="75%" mx="auto" my="12">
				<div id="map" />
			</Box>
			<VStack pos="absolute" right="5%" bottom="5%">
				<HStack w="full">
					<Box w="12" h="4" bg="#64ccff" />
					<Text>APC</Text>
				</HStack>
				<HStack w="full">
					<Box w="12" h="4" bg="#0aa83f" />
					<Text>LP</Text>
				</HStack>
				<HStack w="full">
					<Box w="12" h="4" bg="#d62b3c" />
					<Text>PDP</Text>
				</HStack>
			</VStack>
		</Box>
	);
}
