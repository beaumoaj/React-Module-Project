import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader";
import Footer from "../Footer/Footer";
import Deck from "../Deck/Deck";
import Restaurant from "../Restaurant/Restaurant";
// import Card from "../Card/Card";
// import cardsData from "@/data/fakeCards.json";

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => (
  <div className="app">
    <AppHeader />
    <Deck />
    <Bookings />
    <Restaurant />
    <Footer address={address} />
  </div>
);

export default App;
