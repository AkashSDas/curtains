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
        w={pxToRem(200)}
        h={pxToRem(120)}
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        _hover={{ zIndex: 1 }}
      >
        {/* Poster image */}
        <ChakraBox
          w={pxToRem(200)}
          h={pxToRem(120)}
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
          layout
          transition={{ duration: 0.2, ease: "easeInOut" }}
          initial={{ scale: 1, top: 0, left: 0 }}
          animate={{
            scale: isHovered ? 1.08 : 1,
            top: isHovered ? "-32px" : 0,
          }}
          style={{
            position: "absolute",
            // top: "0",
            // left: "0",
            originX: 0.5,
            originY: 0.5,
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <ChakraBox
            initial={{ scale: 1 }}
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            bg="gray.200"
            rounded={pxToRem(12)}
          >
            {/* Poster image */}
            <ChakraBox
              layout
              w={pxToRem(200)}
              h={pxToRem(120)}
              rounded={pxToRem(12)}
              cursor="pointer"
              position="relative"
            >
              <Image
                src={movie.images.poster}
                alt={movie.title}
                fill
                style={{ objectFit: "cover", borderRadius: pxToRem(12) }}
              />
            </ChakraBox>

            <ChakraBox
              layout
              overflow="hidden"
              px={pxToRem(6)}
              py={pxToRem(isHovered ? 6 : 0)}
              initial={{ height: 0 }}
              animate={{
                height: isHovered ? "fit-content" : 0, // giving it a height of 30px because using fit-content was causing a jump in animation, overflow takes care of the rest
              }}
            >
              <Text p={pxToRem(6)}>House of Cards</Text>
              <Text></Text>
            </ChakraBox>
          </ChakraBox>
        </motion.div>
      </ChakraBox>
    </Link>
  );
}
