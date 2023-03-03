import { extendTheme, theme } from '@chakra-ui/react';

import { TextTheme } from './Text.theme';

export const Theme = extendTheme({
	colors: {
		brand: {
			light: "#1f2335",
			dark: "#1c2031",
			"100": "#1e233b",
		},
	},
	sizes: {
		...theme.space,
		container: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
	},
	components: {
		Text: TextTheme,
	},
});
