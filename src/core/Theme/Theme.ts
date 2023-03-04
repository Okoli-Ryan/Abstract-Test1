import { extendTheme } from "@chakra-ui/react";

import { ButtonTheme } from "./Button.theme";
import { ContainerTheme } from "./Container.theme";
import { LinkTheme } from "./Link.theme";
import { TextTheme } from "./Text.theme";

export const Theme = extendTheme({
	colors: {
		brand: {
			light: "#1f2335",
			dark: "#1c2031",
			gray: "#353949",
			yellow: "#e5b805",
			blue: {
				light: "#D0F8FF",
			},
			"100": "#1e233b",
		},
	},
	styles: {
		global: {
			".bordered": {
				borderColor: "whiteAlpha.100",
				borderRadius: "xl",
				borderWidth: "1px",
				bg: "brand.dark",
			},
		},
	},
	components: {
		Text: TextTheme,
		Container: ContainerTheme,
		Button: ButtonTheme,
		Link: LinkTheme,
	},
});
