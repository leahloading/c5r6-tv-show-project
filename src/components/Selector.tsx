import Episode from "../types/Episode";
import Show from "../types/Show";
import DisplayList from "./DisplayList";
import FilterBar from "./FilterBar";

interface SelectorProps {
  searchTerm: string;
  setSearchTerm: (str: string) => void;
  episodeList: Episode[];
  setEpisodeList: (ep: Episode[]) => void;
  showList: Show[];
  setShowList: (shows: Show[]) => void;
  selectedShow?: Show;
  setSelectedShow: (show: Show) => void;
}

const Selector = ({
  searchTerm,
  setSearchTerm,
  episodeList,
}: SelectorProps) => {
  return (
    <>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        episodeList={episodeList}
      />
      <DisplayList searchTerm={searchTerm} episodeList={episodeList} />
    </>
  );
};

export default Selector;
