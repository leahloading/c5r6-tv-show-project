import Episode from "../../types/Episode";

function generateEpisodeCode({ season, number }: Episode): string {
  return `S${season.toString().padStart(2, "0")}${number
    .toString()
    .padStart(2, "0")}`;
}

export default generateEpisodeCode;
