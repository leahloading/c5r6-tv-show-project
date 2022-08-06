import Episode from "../../types/Episode";

const searchEpisode = (searchTerm: string, itemList: Episode[]): number[] => {
  const filteredItems: Episode[] = itemList.filter(
    // TODO not case-sensitive
    (item: Episode) => {
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
