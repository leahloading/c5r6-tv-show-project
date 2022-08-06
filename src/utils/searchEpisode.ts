import Episode from "../types/Episode";
import Show from "../types/Show";

const searchEpisode = (
  searchTerm: string,
  itemList: (Episode | Show)[]
): number[] => {
  const filteredItems: (Episode | Show)[] = itemList.filter(
    // TODO not case-sensitive
    (item: Episode | Show) => {
      if (item.name.includes(searchTerm)) {
        return true;
      } else if (item.summary.includes(searchTerm)) {
        return true;
      }
      return false;
    }
  );
  const itemIDs = filteredItems.map((item) => item.id);
  return itemIDs;
};

export default searchEpisode;
