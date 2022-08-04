import Episode from "../types/Episode";
import generateEpisodeCode from "../utils/generateEpisodeCode";

interface EpisodeSelectorProps {
  searchTerm: string;
  setSearchTerm: (str: string) => void;
  episodeList: Episode[];
}

const FilterBar = ({
  searchTerm,
  setSearchTerm,
  episodeList,
}: EpisodeSelectorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSearchTerm(e.target.value);

  const handleReset = () => setSearchTerm("");

  return (
    <section className="filterBar">
      <input type="text" value={searchTerm} onChange={handleChange} />
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
    </section>
  );
};

export default FilterBar;
