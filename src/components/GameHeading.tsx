import { GameQuery } from "../hooks/useGames";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery: { platform, genre } }: Props) {
  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;

  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
