import Show from "../../types/Show";
import ShowDisplayList from "./ShowDisplayList";
import ShowFilterBar from "./ShowFilterBar";

interface ShowSelectorProps {
  itemDisplay: number[];
  setItemDisplay: (ids: number[]) => void;
  itemList: Show[];
  setItemList: (show: Show[]) => void;
  selectedItem: number | null;
  setSelectedItem: (id: number | null) => void;
  className: string;
  onCardClick: (id: number | null) => void;
}

const ShowSelector = ({
  itemDisplay,
  setItemDisplay,
  itemList,
  className,
  selectedItem,
  setSelectedItem,
  onCardClick,
}: ShowSelectorProps): JSX.Element => {
  return (
    <div className={`${className} Selector`}>
      <ShowFilterBar
        itemType={className}
        itemDisplay={itemDisplay}
        setItemDisplay={setItemDisplay}
        itemList={itemList}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <ShowDisplayList
        ids={itemDisplay}
        itemList={itemList}
        itemType={className}
        onCardClick={onCardClick}
      />
    </div>
  );
};

export default ShowSelector;
