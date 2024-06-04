import "./Card.scss";

const Card = ({ card }) => {
  //console.log(card.title + " " + card.idx);
  const k = "card_" + card.idx;
  return (
    <a key={k + "_link"} href={card.url}>
      <div key={k + "_card"} className="card">
        <div key={k + "_title"} className="card__title">
          {card.title}
        </div>
        <img
          key={k + "_image"}
          className="card__image"
          src={"/src/assets/" + card.image}
          alt="An Image"
        />
      </div>
    </a>
  );
};

export default Card;
