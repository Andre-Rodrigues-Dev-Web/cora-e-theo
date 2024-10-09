import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <ul className="links">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/sobre-nos"}>Nossa História</Link>
      </li>
      <li>
        <Link to={"/playlist"}>Ouça nossas músicas</Link>
      </li>
      <li>
        <Link to={"/"}>Confira nossa agenda</Link>
      </li>
      <li>
        <Link to={"/"}>Blog</Link>
      </li>
      <li>
        <Link to={"/"}>Contato</Link>
      </li>
    </ul>
  );
};

export default Links;
