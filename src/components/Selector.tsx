import Episode from "../types/Episode";
import Show from "../types/Show";
import generateEpisodeCode from "../utils/generateEpisodeCode";
import DisplayList from "./DisplayList";
import FilterBar from "./FilterBar";

// TODO Selector Prop can have a ItemType
type ItemType = Episode | Show;

interface SelectorProps<Item extends ItemType> {
  searchTerm: string;
  setSearchTerm: (str: string) => void;
  itemList: Item[];
  setItemList: (el: Item) => void;
  selectedItem?: Item;
  setSelectedItem: (el: Item) => void;
  className: string;
  dropdownItemName: (el: Item) => string;
}

function Selector<T extends ItemType>({
  searchTerm,
  setSearchTerm,
  itemList,
  className,
  dropdownItemName,
}: SelectorProps<T>) {
  return (
    <div className={`${className} Selector`}>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        itemList={itemList}
        dropdownItemName={dropdownItemName}
      />
      <DisplayList searchTerm={searchTerm} itemList={itemList} />
    </div>
  );
}

export default Selector;
