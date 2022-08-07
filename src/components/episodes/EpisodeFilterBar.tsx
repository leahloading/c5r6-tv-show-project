import { useEffect, useState } from "react";
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
  const [dropdownSelection, setDropdownSelection] = useState("");

  useEffect(() => {
    if (app.selectedEpisode !== null) {
      setDropdownSelection(app.selectedEpisode.toString());
    }
  }, [app.selectedEpisode]);

  function dropdownEpisodeName(el: Episode) {
    return `${generateEpisodeCode(el)} - ${el.name}`;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApp({
      ...app,
      episodeDisplay: searchEpisode(e.target.value, app.episodeList),
    });
    setDropdownSelection("");
    setSearchTerm(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`${e.target.value} << DropDown Menu Selected`);
    if (e.target.value === "") {
      setApp({
        ...app,
        episodeDisplay: app.episodeList.map((episode) => episode.id),
        selectedEpisode: null,
      });
      setDropdownSelection("");
    } else {
      const id = parseInt(e.target.value);
      setApp({
        ...app,
        episodeDisplay: [id],
        selectedEpisode: id,
      });
      setDropdownSelection(id.toString());
    }
  };

  const handleReset = () => {
    setApp({
      ...app,
      episodeDisplay: app.episodeList.map((item) => item.id),
      selectedEpisode: null,
    });
    setSearchTerm("");
    setDropdownSelection("");
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
        value={dropdownSelection}
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
