import Episode from "../types/Episode";
import Show from "../types/Show";
import generateEpisodeCode from "../utils/generateEpisodeCode";
import searchEpisode from "../utils/searchEpisode";
import searchShow from "../utils/searchShows";
import Selector from "./Selector";

interface Props {
  episodeDisplay: number[];
  setEpisodeDisplay: (ids: number[]) => void;
  showDisplay: number[];
  setShowDisplay: (ids: number[]) => void;
  episodeList: Episode[];
  setEpisodeList: (ep: Episode[]) => void;
  showList: Show[];
  setShowList: (shows: Show[]) => void;
  selectedShow: number | null;
  setSelectedShow: (id: number | null) => void;
  selectedEpisode: number | null;
  setSelectedEpisode: (id: number | null) => void;
}

const PageMain = ({
  episodeDisplay,
  setEpisodeDisplay,
  showDisplay,
  setShowDisplay,
  episodeList,
  setEpisodeList,
  showList,
  setShowList,
  selectedShow,
  setSelectedShow,
  selectedEpisode,
  setSelectedEpisode,
}: Props): JSX.Element => {
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
        selectedItem={selectedShow}
        setSelectedItem={setSelectedShow}
        itemList={showList}
        setItemList={setShowList}
        dropdownItemName={(show: Show | Episode) => show.name}
        itemDisplay={showDisplay}
        setItemDisplay={setShowDisplay}
        itemSearchFunction={searchShow}
        onCardClick={setSelectedShow}
      />

      <Selector
        className="Episode"
        selectedItem={selectedEpisode}
        setSelectedItem={setSelectedEpisode}
        itemList={episodeList}
        setItemList={setEpisodeList}
        dropdownItemName={dropdownEpisodeName}
        itemDisplay={episodeDisplay}
        setItemDisplay={setEpisodeDisplay}
        itemSearchFunction={searchEpisode}
        onCardClick={setSelectedEpisode}
      />
    </main>
  );
};

export default PageMain;
