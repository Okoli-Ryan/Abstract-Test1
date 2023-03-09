import { BackgroundProps } from "@chakra-ui/react";

import { PoliticalPartyAcronym } from "./Models";

export const COLOR: Record<PoliticalPartyAcronym, BackgroundProps["bg"]> = {
	APC: "#64CCFF",
	LP: "#0AA83F",
	PDP: "#D62B3C",
};
