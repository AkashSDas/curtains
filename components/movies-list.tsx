import Image from "next/image";
import Link from "next/link";

import { Box, Heading, HStack } from "@chakra-ui/react";

import { pxToRem } from "../lib/chakra-ui";
import { Movie } from "../lib/data";

interface Props {
  heading: string;
  movies: Movie[];
}

export default function MoviesList(props: Props): JSX.Element {
  return (
    <Box>
      <Heading as="h2" mb={pxToRem(24)} fontSize="2xl">
        {props.heading}
      </Heading>

      <HStack overflowX="scroll">
        {props.movies.map((movie) => (
          <Link key={movie.id} href={`/watch/movie/${movie.id}`}>
            <Box
              w={pxToRem(180)}
              h={pxToRem(240)}
              flex="0 0 auto"
              bg="gray.200"
              rounded="lg"
              cursor="pointer"
              position="relative"
              overflow="hidden"
            >
              <Image
                src={movie.images.poster}
                alt={movie.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Link>
        ))}
      </HStack>
    </Box>
  );
}
