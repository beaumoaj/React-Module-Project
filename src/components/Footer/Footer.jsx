import "./Footer.scss";

const Footer = ({ address }) => (
  <footer className="app__footer">
    <ul>
      {address.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  </footer>
);

export default Footer;
