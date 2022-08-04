import Episode from "../types/Episode";
import filterEpisodes from "../utils/filterEpisodes";
import Card from "./Card";

interface DisplayListProps {
  searchTerm: string;
  episodeList: Episode[];
}

const DisplayList = ({ searchTerm, episodeList }: DisplayListProps) => {
  const filteredEpisodes = episodeList.filter((ep) =>
    filterEpisodes(ep, searchTerm)
  );

  return (
    <section className="episode selector">
      <section className="displayList">
        <p>Episodes found: {filteredEpisodes.length}</p>
        {filteredEpisodes.map((ep) => (
          <Card key={ep.id} episode={ep} />
        ))}
      </section>
    </section>
  );
};

export default DisplayList;
