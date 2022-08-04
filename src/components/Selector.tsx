import Episode from "../types/Episode";
import Show from "../types/Show";
import generateEpisodeCode from "../utils/generateEpisodeCode";
import DisplayList from "./DisplayList";
import FilterBar from "./FilterBar";

interface SelectorProps {
  searchTerm: string;
  setSearchTerm: (str: string) => void;
  itemList: Episode[] | Show[];
  setItemList: (el: Episode[] | Show[]) => void;
  selectedItem?: Episode | Show;
  setSelectedItem: (el: Episode | Show) => void;
  className: string;
  dropdownItemName: (el: Episode) => string | ((el: Show) => string);
}

const Selector = ({
  searchTerm,
  setSearchTerm,
  itemList,
  className,
  dropdownItemName,
}: SelectorProps) => {
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
};

export default Selector;
