import { defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
	maxW: ["100%", "100%", "container.md", "container.lg", "container.xl"],
};

export const ContainerTheme = defineStyleConfig({ baseStyle });
