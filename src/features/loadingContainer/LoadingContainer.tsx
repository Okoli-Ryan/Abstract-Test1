// import React, { useEffect} from 'react'
import { Box, Flex, Spinner } from "@chakra-ui/react";

import { usePageContainerContext } from "../PageContainer/context";

interface ILoadingContainerProps {
	children: JSX.Element;
}

export default function LoadingContainer({ children }: ILoadingContainerProps) {
	const { isLoading } = usePageContainerContext();

	return (
		<>
			{isLoading && (
				<Flex
					w="100vw"
					h="100vh"
					bg="#ffffff88"
					pos="fixed"
					zIndex={1000}
					justifyContent="center"
					alignItems="center">
					<Box>
						<Spinner />
					</Box>
				</Flex>
			)}
			{children}
		</>
	);
}
