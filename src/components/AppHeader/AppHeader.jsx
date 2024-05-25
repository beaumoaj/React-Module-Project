import Logo from "@/assets/spa-logo.png";
import "./AppHeader.scss";
const AppHeader = () => (
  <header className="app__header">
    <img src={Logo} alt="Logo" className="app__logo" />
    <h1 className="app__heading">CYF Hotel</h1>
  </header>
);
export default AppHeader;
