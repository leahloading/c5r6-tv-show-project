import Episode from "../types/Episode";

function generateEpisodeCode({ season, number }: Episode) {
  return `S${season.toString().padStart(2, "0")}${number
    .toString()
    .padStart(2, "0")}`;
}

export default generateEpisodeCode;
