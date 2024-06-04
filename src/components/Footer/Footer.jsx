import "./Footer.scss";

const Footer = ({ address }) => (
  <footer className="app__footer">
    <ul key="footer_list">
      {address.map((line, index) => (
        <li key={"footer_item_" + index}>{line}</li>
      ))}
    </ul>
  </footer>
);

export default Footer;
