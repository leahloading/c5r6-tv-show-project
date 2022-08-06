import { useEffect, useState } from "react";
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
  const [dropdownSelection, setDropdownSelection] = useState("");

  useEffect(() => {
    if (app.selectedShow !== null) {
      setDropdownSelection(app.selectedShow.toString());
    }
  }, [app.selectedShow]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApp({
      ...app,
      selectedShow: null,
      showDisplay: searchShow(e.target.value, app.showList),
    });
    setDropdownSelection("");
    setSearchTerm(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setApp({
        ...app,
        showDisplay: app.showList.map((show) => show.id),
        selectedShow: null,
      });
      setDropdownSelection("");
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
        name="show"
        id="show-select"
        onChange={handleSelect}
        value={dropdownSelection}
      >
        <option value="">Select All</option>
        {app.showList.map((el) => (
          <option key={el.id} value={el.id.toString()}>
            {el.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ShowFilterBar;
