import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Box, Text, VStack } from "@chakra-ui/react";

import { ChakraBox, pxToRem } from "../lib/chakra-ui";
import { Movie } from "../lib/data";

export default function MovieCard({
  movie,
  isFirst,
  isLast,
}: {
  movie: Movie;
  isFirst: boolean;
  isLast: boolean;
}) {
  var [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/watch/movie/${movie.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ChakraBox
        role="group"
        h={pxToRem(240)}
        _hover={{ h: "fit-content", zIndex: 1 }}
        position="relative"
      >
        {/* Poster image */}
        <ChakraBox
          layoutId="poster"
          w={pxToRem(180)}
          h={pxToRem(240)}
          flex="0 0 auto"
          bg="gray.200"
          rounded={pxToRem(12)}
          cursor="pointer"
          position="relative"
          transition="all 0.2s"
        >
          <Image
            src={movie.images.poster}
            alt={movie.title}
            fill
            style={{ objectFit: "cover", borderRadius: pxToRem(12) }}
          />
        </ChakraBox>

        {/* Display on parent hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: -32,
            transform: "translateX(-12.5%)", // to center the box
            background: "#f2f2f2",
            borderRadius: "12px",
            left: isFirst ? "32px" : isLast ? "-32px" : "unset",
          }}
        >
          <Box top={0} w={pxToRem(180 + 64)} boxShadow="xl" h="max-content">
            {/* Poster image */}
            <ChakraBox
              layoutId="poster"
              w={pxToRem(180 + 64)}
              h={pxToRem(140 + 64)}
              rounded={pxToRem(12)}
              cursor="pointer"
              position="relative"
              transition="all 0.2s"
            >
              <Image
                src={movie.images.poster}
                alt={movie.title}
                fill
                style={{ objectFit: "cover", borderRadius: pxToRem(12) }}
              />
            </ChakraBox>

            <VStack px={pxToRem(8)} py={pxToRem(6)} gap={0} alignItems="start">
              <Text fontWeight="semibold">House of Cards</Text>
              <Text fontSize="sm" color="gray.500" mt={0}>
                2013 • 5 Seasons • TV-MA
              </Text>
            </VStack>
          </Box>
        </motion.div>
      </ChakraBox>
    </Link>
  );
}
