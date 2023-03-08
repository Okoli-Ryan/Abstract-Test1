import { createContext, useContext } from "react";

import { usePageContainer } from "./usePageContainer";

type IPageContainerContext = ReturnType<typeof usePageContainer>;

export const PageContainerContext = createContext({} as IPageContainerContext);

export const usePageContainerContext = () => useContext(PageContainerContext);
