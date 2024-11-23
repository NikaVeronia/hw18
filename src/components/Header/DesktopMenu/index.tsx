import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/hw18/beans">Beans</Link>
      <Link to="/hw18/facts">Facts</Link>
      <Link to="/hw18/recipes">Recipes</Link>
      <Link to="/hw18/combinations">Combinations</Link>
      <Link to="/hw18/history">History</Link>
    </nav>
  );
};
