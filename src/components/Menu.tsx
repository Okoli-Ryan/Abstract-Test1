import { ChevronDownIcon } from '@chakra-ui/icons';
import {
	Button, Menu as ChakraMenu, MenuButton as ChakraMenuButton, MenuButtonProps,
	MenuItem as ChakraMenuItem, MenuItemProps, MenuList as ChakraMenuList, MenuListProps, MenuProps
} from '@chakra-ui/react';

const Menu = (props: MenuProps) => {
	return <ChakraMenu {...props}>{props.children}</ChakraMenu>;
};

function MenuButton(
	props: MenuButtonProps & { children: React.ReactNode; rightIcon?: React.ReactNode }
) {
	return (
		<ChakraMenuButton
			borderRadius="md"
			as={Button}
			borderWidth="1px"
			maxW="64"
			bg="transparent"
			color="white"
			_hover={{
				bg: "brand.dark",
			}}
			_expanded={{
				bg: "brand.dark",
			}}
			rightIcon={<ChevronDownIcon />}
			{...props}>
			{props.children}
		</ChakraMenuButton>
	);
}

function MenuList(props: MenuListProps) {
	return (
		<ChakraMenuList
			borderColor="brand.100"
			borderWidth="2px"
			bg="brand.light"
			overflowY="auto"
			maxH="20em"
			{...props}>
			{props.children}
		</ChakraMenuList>
	);
}

function MenuItem(props: MenuItemProps) {
	return (
		<ChakraMenuItem
			bg="brand.light"
			color="white"
			_hover={{
				bg: "brand.dark",
			}}
			{...props}>
			{props.children}
		</ChakraMenuItem>
	);
}
function MenuItemLight(props: MenuItemProps) {
	return (
		<ChakraMenuItem
			bg="white"
			color="brand.light"
			_hover={{
				bg: "whiteAlpha.400",
				color: "white",
			}}
			{...props}>
			{props.children}
		</ChakraMenuItem>
	);
}

Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.ItemLight = MenuItemLight;
Menu.Button = MenuButton;
export { Menu };
