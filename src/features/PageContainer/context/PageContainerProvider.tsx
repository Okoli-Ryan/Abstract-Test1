import { Container } from "@chakra-ui/react";

import LoadingContainer from "../../loadingContainer/LoadingContainer";
import { PageContainerContext } from "./PageContainerContext";
import { usePageContainer } from "./usePageContainer";

interface IPageContainerProviderProps {
	children: JSX.Element;
}

export const PageContainerProvider = ({ children }: IPageContainerProviderProps) => {
	const response = usePageContainer();

	return (
		<PageContainerContext.Provider value={response}>
			<LoadingContainer>
				<Container>{children}</Container>
			</LoadingContainer>
		</PageContainerContext.Provider>
	);
};
