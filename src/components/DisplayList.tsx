import Episode from "../types/Episode";
import Show from "../types/Show";
import filterEpisodes from "../utils/filterEpisodes";
import EpisodeCard from "./EpisodeCard";

interface DisplayListProps {
  searchTerm: string;
  setSearchTerm: (str: string) => void;
  episodeList: Episode[];
  setEpisodeList: (ep: Episode[]) => void;
  showList: Show[];
  setShowList: (shows: Show[]) => void;
  selectedShow?: Show;
  setSelectedShow: (show: Show) => void;
}

const DisplayList = ({
  searchTerm,
  setSearchTerm,
  episodeList,
  setEpisodeList,
  showList,
  setShowList,
  selectedShow,
  setSelectedShow,
}: DisplayListProps) => {
  const filteredEpisodes = episodeList.filter((ep) =>
    filterEpisodes(ep, searchTerm)
  );

  return (
    <section className="episode selector">
      <section className="displayList">
        <p>Episodes found: {filteredEpisodes.length}</p>
        {filteredEpisodes.map((ep) => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}
      </section>
    </section>
  );
};

export default DisplayList;
