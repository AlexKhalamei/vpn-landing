import styles from './Nav.module.scss';

const nav = [
  {
    title: 'About',
    link: '',
  },
  {
    title: 'Features',
    link: '',
  },
  {
    title: 'Pricing',
    link: '',
  },
  {
    title: 'Testimonials',
    link: '',
  },
  {
    title: 'Contact',
    link: '',
  },
];

const Nav = ({ burgerActive }) => {
  return (
    <nav className={`${styles.nav} ${burgerActive ? styles.active : ''}`}>
      <ul className={styles.list}>
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      {burgerActive && (
        <div className={styles.auth}>
          <button className={styles.btn}>Log In</button>
          <button className={styles.btn}>Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
