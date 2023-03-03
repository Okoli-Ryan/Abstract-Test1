import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
	menuAnatomy.keys
);

const baseStyle = definePartsStyle({
	button: {
		borderRadius: "md",
		borderWidth: "1px",
		w: "64",
		bg: "transparent",
		color: "white",
		_hover: {
			bg: "brand.dark",
		},
		_expanded: {
			bg: "brand.dark",
		},
	},
	list: {
		borderColor: "brand.100",
		borderWidth: "2px",
		bg: "brand.light",
		overflowY: "auto",
		maxH: "20em",
	},
	item: {
		bg: "brand.light",
		color: "white",
		_hover: {
			bg: "brand.dark",
		},
	},
});

export const MenuTheme = defineMultiStyleConfig({ baseStyle });
