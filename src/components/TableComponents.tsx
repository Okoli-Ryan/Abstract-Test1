import {
	TableColumnHeaderProps,
	TableRowProps,
	Th as ChakraTh,
	Tr as ChakraTr,
} from "@chakra-ui/react";

export const Tr = (props: TableRowProps) => {
	return <ChakraTr color="white" {...props} />;
};

export const Th = (props: TableColumnHeaderProps) => {
	return <ChakraTh color="white" {...props} />;
};
