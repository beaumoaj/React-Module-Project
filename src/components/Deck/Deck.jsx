import Card from "../Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
  // you will need to map over the cardsData array and render a Card component for each card object
  // how will you pass props to the Card component?

  return (
    <div key="deck" className="deck">
      {cardsData.map((card, idx, arr) => {
        //console.log(idx);
        card.idx = idx;
        return <Card key={"card_component_" + idx} card={card} />;
      })}
    </div>
  );
};

export default Deck;
