import { IoFemale, IoMale } from "react-icons/io5";

import { GridItem, HStack, Text, VStack } from "@chakra-ui/react";

export function ElectedMembers() {
	return (
		<GridItem colSpan={2} className="bordered" p="4" py="8" maxH="25rem">
			<VStack gap="4">
				<MemberComponent title="Total Elected Members" count="10,000" />
				<MemberComponent
					title="Male"
					icon={<IoMale color="#e5b805" size="18" />}
					count="9,000"
				/>
				<MemberComponent
					title="Female"
					icon={<IoFemale color="#e5b805" size="18" />}
					count="1,000"
				/>
			</VStack>
		</GridItem>
	);
}

interface IMemberComponentProps {
	title: React.ReactNode;
	icon?: React.ReactNode;
	count: string;
}

function MemberComponent({ title, icon, count }: IMemberComponentProps) {
	return (
		<VStack w="full">
			<HStack w="full" alignItems="center">
				<Text w="max-content" textTransform="uppercase">
					{title}
				</Text>
				{icon}
			</HStack>
			<Text fontWeight="bold" fontSize="larger" mt="0">
				{count}
			</Text>
		</VStack>
	);
}
