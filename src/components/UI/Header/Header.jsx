import { useState, useEffect } from 'react';
import logo from '@/assets/logo.svg';

// components
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const updateHeaderOpacity = () => {
    const scroll = window.scrollY;
    const newOpacity = Math.min(0.93, scroll / 50);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateHeaderOpacity);
    updateHeaderOpacity();

    return () => {
      window.removeEventListener('scroll', updateHeaderOpacity);
    };
  }, []);

  const burgerHandler = () => {
    setBurgerActive(!burgerActive);
  };

  return (
    <header
      className={styles.header}
      style={{ background: `rgb(0 53 121 / ${opacity * 100}%)` }}
    >
      <div className={`${styles.wrapper} container`}>
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div
          className={`${styles.burger} ${burgerActive ? styles.active : ''}`}
          onClick={burgerHandler}
        >
          <span></span>
        </div>
        <Nav burgerActive={burgerActive} />
        <div className={styles.auth}>
          <button className={styles.btn}>Log In</button>
          <button className={styles.btn}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
