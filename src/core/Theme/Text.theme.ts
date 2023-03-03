import { defineStyleConfig } from '@chakra-ui/react';

export const TextTheme = defineStyleConfig({
    baseStyle: {
        color: "white"
    },
    variants:{
        heading: {
            textTransform: "uppercase"
        }
    }
})