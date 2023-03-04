import { IoCaretDownSharp } from "react-icons/io5";

import {
	Button,
	Center,
	HStack,
	Image,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";

import Person1 from "../../../assets/icons/person1.svg";
import Person3 from "../../../assets/icons/person3.svg";
import Person4 from "../../../assets/icons/person4.svg";

export function OurCommunities() {
	return (
		<>
			<Popover>
				<PopoverTrigger>
					<Button
						variant="ghost"
						color="white"
						fontSize={{
							base: "x-small",
							xl: "sm",
						}}
						fontWeight="bold"
						textTransform="uppercase"
						px={0}
						_hover={{
							bg: "unset",
						}}
						rightIcon={<IoCaretDownSharp />}>
						Our Communities
					</Button>
				</PopoverTrigger>
				<PopoverContent w="full">
					<PopoverBody p={4}>
						<SimpleGrid columns={2} gap={3}>
							{CommunitiesDataList.map((data) => (
								<CommunityOption {...data} />
							))}
						</SimpleGrid>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	);
}

interface ICommunityOptionProps {
	key: string;
	icon: string;
	heading: string;
	description: string;
}

function CommunityOption({ icon, heading, description }: ICommunityOptionProps) {
	return (
		<Button
			variant="ghost"
			h="100%"
			_hover={{
				bg: "gray.200",
			}}>
			<HStack>
				<Center bg="brand.blue.light" p="2" rounded="md">
					<Image src={icon} w={6} h={6} />
				</Center>
				<VStack w="full" p="2">
					<Text textAlign="left" color="brand.light">
						{heading}
					</Text>
					<Text fontSize="small" textAlign="left" fontWeight="light" color="brand.light">
						{description}
					</Text>
				</VStack>
			</HStack>
		</Button>
	);
}

const CommunitiesDataList = [
	{
		key: "1",
		heading: "General User",
		icon: Person1,
		description: "Odio mi in id tellus turpis elementum ipsum.",
	},
	{
		key: "2",
		icon: Person1,
		heading: "Election Candidates",
		description: "Odio mi in id tellus turpis elementum ipsum.",
	},
	{
		key: "3",
		icon: Person3,
		heading: "Decide To Run (DTR)",
		description: "Odio mi in id tellus turpis elementum ipsum.",
	},
	{
		key: "4",
		icon: Person4,
		heading: "Reporters",
		description: "Odio mi in id tellus turpis elementum ipsum.",
	},
];
