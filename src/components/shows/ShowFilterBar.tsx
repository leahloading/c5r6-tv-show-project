import { useState } from "react";
import AppState from "../../types/AppState";
import searchShow from "../../utils/shows/searchShows";

interface ShowFilterBarProps {
  app: AppState;
  setApp: (app: AppState) => void;
  itemType: string;
}

const ShowFilterBar = ({
  app,
  setApp,
  itemType,
}: ShowFilterBarProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApp({
      ...app,
      showDisplay: searchShow(e.target.value, app.showList),
    });
    setSearchTerm(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`${e.target.value} << DropDown Menu Selected`);
    if (e.target.value === "") {
      setApp({
        ...app,
        showDisplay: app.showList.map((show) => show.id),
        selectedShow: null,
      });
    } else {
      const id = parseInt(e.target.value);
      setApp({
        ...app,
        showDisplay: [id],
        selectedShow: id,
      });
    }
  };

  const handleReset = () => {
    setApp({
      ...app,
      showDisplay: app.showList.map((item) => item.id),
      selectedShow: null,
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
        name="show"
        id="show-select"
        onChange={handleSelect}
        value={app.selectedShow ? app.selectedShow : undefined}
      >
        <option value="">Select All</option>
        {app.showList.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ShowFilterBar;
