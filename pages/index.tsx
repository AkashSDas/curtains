import { Box } from "@chakra-ui/react";

import MoviesList from "../components/movies-list";
import { pxToRem } from "../lib/chakra-ui";
import { movies } from "../lib/data";

export default function HomePage() {
  return (
    <Box as="main" mt={pxToRem(32)} px={pxToRem(24)}>
      <MoviesList heading="Trending" movies={movies} />
    </Box>
  );
}
