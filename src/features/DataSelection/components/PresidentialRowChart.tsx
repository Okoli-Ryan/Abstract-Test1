import { useState } from "react";

import { Box, Flex, Text, Tooltip, VStack } from "@chakra-ui/react";

import { IPresidentialResult } from "../../../core";
import { COLOR } from "../../../core/Constants";
import { usePageContainerContext } from "../../PageContainer/context";

export default function PresidentialRowChart() {
	const { presidentalResults } = usePageContainerContext();
	const totalResult =
		presidentalResults.length === 0
			? 0
			: presidentalResults.reduce((prev, curr) => prev + curr.candidates_vote, 0);

	return (
		<VStack w="full" mt="4">
			<Text textTransform="uppercase">President</Text>
			<Flex w="full" h="4">
				{presidentalResults.map((result) => (
					<PresidentialRowChartItem totalResult={totalResult} result={result} />
				))}
			</Flex>
		</VStack>
	);
}

interface IPresidentialRowChartItem {
	result: IPresidentialResult;
	totalResult: number;
}

function PresidentialRowChartItem({ result, totalResult }: IPresidentialRowChartItem) {
	const [isOpen, setIsOpen] = useState(false);

	function showPopOver() {
		setIsOpen(true);
	}

	function hidePopOver() {
		setIsOpen(false);
	}

	const percentageVote = ((result.candidates_vote * 100) / totalResult).toFixed(1);
	let partyKey: keyof typeof COLOR = "LP";
	if (result.political_party_name === "All Progressives Congress") partyKey = "APC";
	if (result.political_party_name === "Labour Party") partyKey = "LP";
	if (result.political_party_name === "People's Democratic Party") partyKey = "PDP";

	return (
		<Tooltip
			bg="white"
			isOpen={isOpen}
			label={
				<VStack w="full">
					<Text color={COLOR[partyKey]}>
						{result.full_name}, {partyKey}
					</Text>
					<Text color="#585858">
						{result.candidates_vote} votes, {percentageVote}%
					</Text>
				</VStack>
			}>
			<Box
				h="full"
				w={`${percentageVote}%`}
				bg={COLOR[partyKey]}
				onMouseEnter={showPopOver}
				onMouseLeave={hidePopOver}
			/>
		</Tooltip>
	);
}
