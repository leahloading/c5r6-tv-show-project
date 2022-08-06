import Episode from "../types/Episode";
import Show from "../types/Show";
import EpisodeSelector from "./episodes/EpisodeSelector";
import ShowSelector from "./shows/ShowSelector";

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
  return (
    <main>
      <ShowSelector
        className="Show"
        selectedItem={selectedShow}
        setSelectedItem={setSelectedShow}
        itemList={showList}
        setItemList={setShowList}
        itemDisplay={showDisplay}
        setItemDisplay={setShowDisplay}
        onCardClick={setSelectedShow}
      />

      {selectedShow === null || (
        <EpisodeSelector
          className="Episode"
          selectedItem={selectedEpisode}
          setSelectedItem={setSelectedEpisode}
          itemList={episodeList}
          setItemList={setEpisodeList}
          itemDisplay={episodeDisplay}
          setItemDisplay={setEpisodeDisplay}
          onCardClick={setSelectedEpisode}
        />
      )}
    </main>
  );
};

export default PageMain;
