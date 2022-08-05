import Episode from "../types/Episode";
import Show from "../types/Show";
import generateEpisodeCode from "../utils/generateEpisodeCode";
import Selector from "./Selector";

interface Props {
  searchTerm: string;
  setSearchTerm: (str: string) => void;
  episodeList: Episode[];
  setEpisodeList: (ep: Episode[]) => void;
  showList: Show[];
  setShowList: (shows: Show[]) => void;
  selectedShow?: Show;
  setSelectedShow: (show: Show) => void;
  selectedEpisode?: Episode;
  setSelectedEpisode: (show: Episode) => void;
  episodeSearchTerm: string;
  setEpisodeSearchTerm: (str: string) => void;
  showSearchTerm: string;
  setShowSearchTerm: (str: string) => void;
}

const PageMain = ({
  episodeSearchTerm,
  setEpisodeSearchTerm,
  showSearchTerm,
  setShowSearchTerm,
  episodeList,
  setEpisodeList,
  showList,
  setShowList,
  selectedShow,
  setSelectedShow,
  selectedEpisode,
  setSelectedEpisode,
}: Props): JSX.Element => {
  const handleShowSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const selectedShows = showList.filter(
      (show) => show.id.toString() === e.target.value
    );
    setSelectedShow(selectedShows[0]);
  };

  function dropdownEpisodeName(el: Episode | Show) {
    if ("season" in el) {
      return `${generateEpisodeCode(el)} - ${el.name}`;
    } else {
      return el.name;
    }
  }

  return (
    <main>
      <Selector
        className="Show"
        searchTerm={showSearchTerm}
        setSearchTerm={setShowSearchTerm}
        selectedItem={selectedShow}
        setSelectedItem={setSelectedShow}
        itemList={showList}
        setItemList={setShowList}
        dropdownItemName={(show: Show | Episode) => show.name}
        filterForIds={(a: (Show | Episode)[]) => [3, 3]}
      />

      <Selector
        className="Episode"
        searchTerm={episodeSearchTerm}
        setSearchTerm={setEpisodeSearchTerm}
        itemList={episodeList}
        setItemList={setEpisodeList}
        selectedItem={selectedEpisode}
        setSelectedItem={setSelectedEpisode}
        dropdownItemName={dropdownEpisodeName}
        filterForIds={(a: (Show | Episode)[]) => [3, 3]}
      />
    </main>
  );
};

export default PageMain;
