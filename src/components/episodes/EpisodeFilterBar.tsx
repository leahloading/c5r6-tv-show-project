import { useState } from "react";
import AppState from "../../types/AppState";
import Episode from "../../types/Episode";
import generateEpisodeCode from "../../utils/episodes/generateEpisodeCode";
import searchEpisode from "../../utils/episodes/searchEpisode";

interface EpisodeSelectorProps {
  app: AppState;
  setApp: (app: AppState) => void;
  itemType: string;
}

const EpisodeFilterBar = ({
  app,
  setApp,
  itemType,
}: EpisodeSelectorProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");

  function dropdownEpisodeName(el: Episode) {
    return `${generateEpisodeCode(el)} - ${el.name}`;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApp({
      ...app,
      showDisplay: searchEpisode(e.target.value, app.episodeList),
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`${e.target.value} << DropDown Menu Selected`);
    if (e.target.value === "") {
      setApp({
        ...app,
        episodeDisplay: app.episodeList.map((episode) => episode.id),
        selectedEpisode: null,
      });
    } else {
      const id = parseInt(e.target.value);
      setApp({
        ...app,
        episodeDisplay: [id],
        selectedEpisode: id,
      });
    }
  };

  const handleReset = () => {
    setApp({
      ...app,
      episodeDisplay: app.episodeList.map((item) => item.id),
      selectedEpisode: null,
    });
    setSearchTerm("");
  };

  return (
    <section className={`${itemType.toLowerCase()} filter-bar`}>
      <button onClick={handleReset}>reset search</button>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={`search ${itemType.toLowerCase()}s...`}
      />
      <select
        name="episode"
        id="episode-select"
        onChange={handleSelect}
        value={app.selectedEpisode ? app.selectedEpisode : undefined}
      >
        <option value="">Select All</option>
        {app.episodeList.map((el) => (
          <option key={el.id} value={el.id}>
            {dropdownEpisodeName(el)}
          </option>
        ))}
      </select>
    </section>
  );
};

export default EpisodeFilterBar;
