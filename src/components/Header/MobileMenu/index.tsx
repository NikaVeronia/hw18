import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/hw18/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/hw18/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/hw18/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/hw18/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/hw18/history" onClick={handleLinkClick}>
              History
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
