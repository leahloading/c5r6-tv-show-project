import Episode from "../types/Episode";
import Show from "../types/Show";
import DisplayList from "./DisplayList";
import FilterBar from "./FilterBar";

interface SelectorProps {
  itemDisplay: number[];
  setItemDisplay: (ids: number[]) => void;
  itemList: Episode[] | Show[];
  setItemList: ((show: Show[]) => void) | ((el: Episode[]) => void);
  selectedItem: number | null;
  setSelectedItem: (id: number | null) => void;
  className: string;
  dropdownItemName: (el: Episode | Show) => string;
  itemSearchFunction: (
    searchTerm: string,
    itemList: (Episode | Show)[]
  ) => number[];
  onCardClick: (id: number | null) => void;
  nameCard: (item: Episode | Show) => string;
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
  onCardClick,
  nameCard,
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
        onCardClick={onCardClick}
      />
    </div>
  );
};

export default Selector;
