import Episode from "../types/Episode";
import Show from "../types/Show";

const nameShowCard = (item: Episode | Show): string => {
  return `${item.name}`;
};

export default nameShowCard;
