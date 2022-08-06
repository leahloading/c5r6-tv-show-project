import Episode from "../../types/Episode";
import searchEpisode from "../../utils/episodes/searchEpisode";
import DisplayList from "./EpisodeDisplayList";
import EpisodeFilterBar from "./EpisodeFilterBar";

interface EpisodeSelectorProps {
  itemDisplay: number[];
  setItemDisplay: (ids: number[]) => void;
  itemList: Episode[];
  setItemList: (el: Episode[]) => void;
  selectedItem: number | null;
  setSelectedItem: (id: number | null) => void;
  className: string;
  onCardClick: (id: number | null) => void;
}

const EpisodeSelector = ({
  itemDisplay,
  setItemDisplay,
  itemList,
  className,
  selectedItem,
  setSelectedItem,
  onCardClick,
}: EpisodeSelectorProps): JSX.Element => {
  return (
    <div className={`${className} Selector`}>
      <EpisodeFilterBar
        itemType={className}
        itemDisplay={itemDisplay}
        setItemDisplay={setItemDisplay}
        itemList={itemList}
        itemSearchFunction={searchEpisode}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <DisplayList
        ids={itemDisplay}
        itemList={itemList}
        itemType={className}
        onCardClick={onCardClick}
      />
    </div>
  );
};

export default EpisodeSelector;
