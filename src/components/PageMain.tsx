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
}

const PageMain = ({
  searchTerm,
  setSearchTerm,
  episodeList,
  setEpisodeList,
  showList,
  setShowList,
  selectedShow,
  setSelectedShow,
}: Props): JSX.Element => {
  const handleShowSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const selectedShows = showList.filter(
      (show) => show.id.toString() === e.target.value
    );
    setSelectedShow(selectedShows[0]);
  };

  function dropdownEpisodeName(el: Episode) {
    return `${generateEpisodeCode(el)} - ${el.name}`;
  }

  return (
    <main>
      {/* <select
        name="show"
        id="show-select"
        onChange={handleShowSelect}
        value={selectedShow?.id}
      >
        <option value="">Select a Show</option>
        {showList.map((show) => (
          <option key={show.id} value={show.id}>{`${show.name}`}</option>
        ))}
      </select> */}

      <Selector<Show>
        className="Show"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedItem={selectedShow}
        setSelectedItem={setSelectedShow} // Expected to Work
        // tell me how id the dropdown menu
        // tell me how id the card
        // tell me how to present the title
      />

      <Selector
        className="Episode"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        episodeList={episodeList}
        setEpisodeList={setEpisodeList}
        showList={showList}
        setShowList={setShowList}
        selectedShow={selectedShow}
        setSelectedShow={setSelectedShow}
        dropdownItemName={dropdownEpisodeName}
      />
    </main>
  );
};

export default PageMain;
