import { isValidMotionProp, motion } from "framer-motion";

import { chakra, extendTheme, shouldForwardProp } from "@chakra-ui/react";

export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

export var theme = extendTheme({
  fonts: {},
  colors: {},
  components: {
    Button: {},
    Heading: {},
    Text: {},
  },
});

export var ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
