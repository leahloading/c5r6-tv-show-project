import Episode from "../types/Episode";
import Show from "../types/Show";
import filterEpisodes from "../utils/filterEpisodes";
import generateEpisodeCode from "../utils/generateEpisodeCode";
import EpisodeCard from "./EpisodeCard";

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSearchTerm(e.target.value);

  const handleShowSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const selectedShows = showList.filter(
      (show) => show.id.toString() === e.target.value
    );
    setSelectedShow(selectedShows[0]);
  };

  const handleReset = () => setSearchTerm("");

  const filteredEpisodes = episodeList.filter((ep) =>
    filterEpisodes(ep, searchTerm)
  );

  return (
    <main>
      <input type="text" value={searchTerm} onChange={handleChange} />

      <select
        name="show"
        id="show-select"
        onChange={handleShowSelect}
        value={selectedShow?.id}
      >
        <option value="">Select a Show</option>
        {showList.map((show) => (
          <option key={show.id} value={show.id}>{`${show.name}`}</option>
        ))}
      </select>

      <select
        name="episode"
        id="episode-select"
        onChange={handleSelect}
        value={searchTerm}
      >
        <option value="">Select All</option>
        {episodeList.map((ep) => (
          <option key={ep.id} value={ep.name}>{`${generateEpisodeCode(ep)} - ${
            ep.name
          }`}</option>
        ))}
      </select>
      <button onClick={handleReset}>reset search</button>
      <p>Episodes found: {filteredEpisodes.length}</p>
      {filteredEpisodes.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </main>
  );
};

export default PageMain;
