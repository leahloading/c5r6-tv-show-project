import Show from "../../types/Show";

const searchShow = (searchTerm: string, itemList: Show[]): number[] => {
  const filteredItems: Show[] = itemList.filter((item: Show) => {
    if (item.name.includes(searchTerm)) {
      return true;
    } else if (item.summary.includes(searchTerm)) {
      return true;
    }
    return false;
  });
  const itemIDs = filteredItems.map((item) => item.id);
  return itemIDs;
};

export default searchShow;
