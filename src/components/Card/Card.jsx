import "./Card.scss";

const Card = ({ card }) => {
  console.log(card.title + " " + card.idx);
  const k = "card" + card.idx;
  return (
    <a key={k + "link"} href={card.url}>
      <div key={k + "card"} className="card">
        <div key={k + "title"} className="card__title">
          {card.title}
        </div>
        <img
          key={k + "image"}
          className="card__image"
          src={"/src/assets/" + card.image}
          alt="An Image"
        />
      </div>
    </a>
  );
};

export default Card;
