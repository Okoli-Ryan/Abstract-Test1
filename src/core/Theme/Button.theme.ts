import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const ghostVariant = defineStyle({
	_hover: {
		bg: "brand.dark",
	},
	_active: {
		bg: "brand.dark",
	},
});

export const lightVariant = defineStyle({
	_hover: {
		bg: "whiteAlpha.400",
		color: "brand.light",
	},
	bg: "white",
	color: "brand.light",
});

export const ButtonTheme = defineStyleConfig({
	variants: {
		ghost: ghostVariant,
		light: lightVariant,
	},
});
