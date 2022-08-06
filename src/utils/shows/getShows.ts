import Show from "../../types/Show";

const getShows = async (fetchShows: () => Promise<Show[]>): Promise<Show[]> => {
  const widelyTypedShows: Show[] = await fetchShows();
  const narrowlyTypedShows = widelyTypedShows.map((show: Show) =>
    narrowShowType(show)
  );
  return narrowlyTypedShows;
};

function narrowShowType(show: Show): Show {
  return show;
}

export default getShows;
