import Link from "next/link";

import { HStack, Text } from "@chakra-ui/react";

import { pxToRem } from "../lib/chakra-ui";

export default function Navabr(): JSX.Element {
  return (
    <HStack
      as="nav"
      h={pxToRem(48)}
      px={pxToRem(24)}
      gap={pxToRem(16)}
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack gap={pxToRem(16)} alignItems="center">
        <Link href="/">
          <Text mr={pxToRem(16)} fontWeight="bold" color="red.900">
            Curtains
          </Text>
        </Link>

        <Link href="/browse/movies">Movies</Link>
        <Link href="/browse/tv-shows">TV Shows</Link>
      </HStack>
    </HStack>
  );
}
