import { Box, Heading, HStack } from "@chakra-ui/react";

import { pxToRem } from "../lib/chakra-ui";
import { Movie } from "../lib/data";
import MovieCard from "./movie-card";

interface Props {
  heading: string;
  movies: Movie[];
}

export default function MoviesList(props: Props): JSX.Element {
  return (
    <Box>
      <Heading as="h2" fontSize="2xl">
        {props.heading}
      </Heading>

      <Box overflowX="scroll" py={pxToRem(36)}>
        <HStack>
          {props.movies.map((movie, idx) => (
            <MovieCard
              isFirst={idx == 0}
              isLast={idx == props.movies.length - 1}
              movie={movie}
              key={movie.id}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
