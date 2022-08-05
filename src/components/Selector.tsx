import Episode from "../types/Episode";
import Show from "../types/Show";
import nameCard from "../utils/nameCard";
import DisplayList from "./DisplayList";
import FilterBar from "./FilterBar";

interface SelectorProps {
  itemDisplay: number[];
  setItemDisplay: (ids: number[]) => void;
  itemList: Episode[] | Show[];
  setItemList: ((show: Show[]) => void) | ((el: Episode[]) => void);
  selectedItem: Episode | Show | null;
  setSelectedItem: (item: Show | Episode | null) => void;
  className: string;
  dropdownItemName: (el: Episode | Show) => string;
  itemSearchFunction: (
    searchTerm: string,
    itemList: (Episode | Show)[]
  ) => number[];
}

const Selector = ({
  itemDisplay,
  setItemDisplay,
  itemList,
  className,
  dropdownItemName,
  itemSearchFunction,
  selectedItem,
  setSelectedItem,
}: SelectorProps): JSX.Element => {
  return (
    <div className={`${className} Selector`}>
      <FilterBar
        itemType={className}
        itemDisplay={itemDisplay}
        setItemDisplay={setItemDisplay}
        itemList={itemList}
        dropdownItemName={dropdownItemName}
        itemSearchFunction={itemSearchFunction}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <DisplayList
        ids={itemDisplay}
        itemList={itemList}
        itemType={className}
        nameCard={nameCard}
      />
    </div>
  );
};

export default Selector;
