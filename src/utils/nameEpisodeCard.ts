import Episode from "../types/Episode";
import Show from "../types/Show";
import generateEpisodeCode from "./generateEpisodeCode";

const nameEpisodeCard = (item: Episode | Show): string => {
  const episodeCode = "season" in item && ` - ${generateEpisodeCode(item)}`;
  return `${item.name}${episodeCode}`;
};

export default nameEpisodeCard;
