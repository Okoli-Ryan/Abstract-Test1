import { Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react';

import { ElectionOptionMenu, ElectionTypeMenu, ElectionYearMenu } from './components';
import PresidentialRowChart from './components/PresidentialRowChart';

export default function DataSelection() {
	return (
		<VStack spacing={4} justifyContent="flex-start" mt="12">
			<HStack w="full" alignItems="center" gap="2">
				<Text fontSize="larger" fontWeight="extrabold" w="max-content">
					Post Election Data
				</Text>
				<Text
					bg="brand.dark"
					w="auto"
					fontSize="12"
					textTransform="uppercase"
					border="1px"
					p="1"
					rounded="md"
					borderColor="brand.100">
					Presidential / 2023
				</Text>
			</HStack>
            <PresidentialRowChart />
			<Flex
				justifyContent="space-between"
				w="full"
				alignItems="center"
				gap={8}
				flexDir={{
					base: "column",
					md: "row",
				}}>
				<Text
					fontSize="large"
					w={{
						base: "100%",
						md: "max-content",
					}}
					whiteSpace="nowrap">
					Presidential Race
				</Text>
				<Flex
					justifyContent="flex-end"
					gap={4}
					w="full"
					flexDir={{
						base: "column",
						md: "row",
					}}>
					<ElectionOptionMenu />
					<ElectionTypeMenu />
					<ElectionYearMenu />
				</Flex>
			</Flex>
			<Divider borderColor="whiteAlpha.300" pt="4" />
		</VStack>
	);
}
