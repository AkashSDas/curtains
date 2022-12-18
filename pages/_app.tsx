import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

import Navabr from "../components/navbar";
import { theme } from "../lib/chakra-ui";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navabr />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
