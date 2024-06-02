import "./Card.scss";

const Card = ({ card }) => {
  console.log(card.title + " " + card.idx);
  const k = "card" + card.idx;
  return (
    <a href={card.url}>
      <div id={k} className="card">
        <div className="card__title">{card.title}</div>
        <img
          className="card__image"
          src={"/src/assets/" + card.image}
          alt="An Image"
        />
      </div>
    </a>
  );
};

export default Card;
