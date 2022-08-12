import Episode from "../../types/Episode";
import generateEpisodeCode from "./generateEpisodeCode";

const nameEpisodeCard = (item: Episode): string => {
  const episodeCode = "season" in item && ` - ${generateEpisodeCode(item)}`;
  return `${item.name}${episodeCode}`;
};

export default nameEpisodeCard;
