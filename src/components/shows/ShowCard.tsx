import Show from "../../types/Show";
import nameShowCard from "../../utils/shows/nameShowCard";
import stripHtmlTags from "../../utils/stripHtmlTags";

interface ShowCardProp {
  show: Show;
  onClick: (id: number) => void;
}

function ShowCard({ show, onClick }: ShowCardProp): JSX.Element {
  return (
    <article id={show.id.toString()}>
      <h3 className="card-header">{nameShowCard(show)}</h3>
      <div className="card-main">
        <div className="image-container">
          <img src={show.image.medium} alt={`${show.name}`} />
        </div>
        <div className="summary-pick">
          <button onClick={() => onClick(show.id)}>Pick</button>
          <p>{stripHtmlTags(show.summary)}</p>
        </div>
      </div>
    </article>
  );
}

export default ShowCard;
