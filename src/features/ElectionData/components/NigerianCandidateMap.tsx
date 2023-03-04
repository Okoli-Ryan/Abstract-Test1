import { Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";

import MapImage from "../../../assets/images/MapImage.svg";

export function NigerianCandidateMap() {
	return (
		<GridItem colSpan={4} className="bordered" p="4">
			<Grid templateColumns={"repeat(8, 1fr)"}>
				<GridItem colSpan={5}>
					<VStack>
						<Text fontSize="sm" textTransform="uppercase">
							Candidates by Geopolitical zones
						</Text>
						<Image src={MapImage} pt="16px" />
					</VStack>
				</GridItem>
				<GridItem colSpan={3}>
					<VStack gap={"2"} alignItems="flex-end" mt="100%">
						<CandidateComponent color="#449352" region="North East" />
						<CandidateComponent color="#6D769D" region="North West" />
						<CandidateComponent color="#A163BE" region="North Central" />
						<CandidateComponent color="#E30325" region="South West" />
						<CandidateComponent color="#2249D1" region="South South" />
						<CandidateComponent color="#018796" region="South East" />
					</VStack>
				</GridItem>
			</Grid>
		</GridItem>
	);
}

interface ICandidateComponentProps {
	color: string;
	region: string;
}

function CandidateComponent({ color, region }: Partial<ICandidateComponentProps>) {
	return (
		<HStack w="full" justifyContent="space-between">
			<HStack gap={2}>
				<Box w="8" h="4" bg={color} />
				<Text w="max-content" fontSize="x-small" fontWeight="bold">
					{region}
				</Text>
			</HStack>
			<Text fontSize="x-small" textAlign="right">
				3,000
			</Text>
		</HStack>
	);
}
