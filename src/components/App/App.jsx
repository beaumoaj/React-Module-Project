import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader";
import Footer from "../Footer/Footer";
const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => (
  <div className="app">
    <AppHeader />
    <Bookings />
    <Footer address={address} />
  </div>
);

export default App;
