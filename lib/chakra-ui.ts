import { extendTheme } from "@chakra-ui/react";

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
