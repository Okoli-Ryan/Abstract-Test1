import { Box, Table, TableContainer, Tbody, Td, Thead } from "@chakra-ui/react";

import { Th, Tr } from "../../components";
import { COLOR } from "../../core/Constants";
import { usePageContainerContext } from "../PageContainer/context";
import { IResultItem, TransformStateResults } from "./Utils";

export default function StateReultTable() {
	const { stateResult } = usePageContainerContext();
	const results = TransformStateResults(stateResult);

	return (
		<Box className="bordered" mt="8">
			<TableContainer>
				<Table>
					<Thead>
						<Tr>
							<Th fontSize="lg" py="6">
								State Results
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<TableContainer p="3">
							<Table>
								<Thead>
									<Tr>
										<Th>States</Th>
										<Th>APC</Th>
										<Th>LP</Th>
										<Th>PDP</Th>
										<Th>Leading</Th>
									</Tr>
								</Thead>
								<Tbody>
									{results.map((result) => (
										<StateResultRow {...result} />
									))}
								</Tbody>
							</Table>
						</TableContainer>
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
}

function StateResultRow(props: IResultItem) {
	return (
		<Tr>
			<Td textTransform="capitalize">{props.state_name}</Td>
			<Td>{percentage(props.APC, props.candidate_votes)}%</Td>
			<Td>{percentage(props.LP, props.candidate_votes)}%</Td>
			<Td>{percentage(props.PDP, props.candidate_votes)}%</Td>
			<Td bg={COLOR[props.leading]}>{props.leading}</Td>
		</Tr>
	);
}

function percentage(value: number, total: number) {
	if (isNaN(total)) return 0;
	return Math.round((value * 100) / total);
}
