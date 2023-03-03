import { defineStyleConfig } from '@chakra-ui/react';

export const TextTheme = defineStyleConfig({
	baseStyle: {
		color: "white",
		w: "full",
	},
	variants: {
		heading: {
			textTransform: "uppercase",
		},
	},
});