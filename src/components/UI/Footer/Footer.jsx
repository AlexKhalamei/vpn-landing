import styles from './Footer.module.scss';

// imgs

import logo from '@/assets/logo.svg';
import facebook from '@/assets/Facebook.svg';
import twitter from '@/assets/Twitter.svg';
import instagram from '@/assets/Instagram.svg';
import linkedin from '@/assets/Linkedin.svg';
import footerIcon from '@/assets/footer-icon.svg';
import pc from '@/assets/pc.svg';

const list = [
  {
    icon: logo,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: 'Product',
    items: [
      'Download',
      'Pricing',
      'Server',
      'VPN for Business',
      'VPN for Non-Profit',
    ],
  },
  {
    title: 'Company',
    items: ['What’s is VPN?', 'FAQ', 'Tutorials', 'About us', 'Privacy Policy'],
  },
  {
    title: 'Connect with us',
    icons: [facebook, twitter, instagram, linkedin],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.items}>
          <div className={`${styles.item} ${styles.img}`}>
            <img src={pc} alt="pc" />
          </div>
          <div className={`${styles.item} ${styles.content}`}>
            <h2>Get what you need online, completely undetected.</h2>
            <p>
              30 Day money back guarantee. If you’re not 100% satisfied with
              vping. We’ll refund your payment. No hassle, no risk.
            </p>
            <img src={footerIcon} alt="footer-icon" className={styles.icon} />
            <p>
              Start from <span className={styles.price}>$2.99</span> / month
            </p>
            <a href="#" className={styles.btn}>
              Get Started
            </a>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.coopyright}>
            <img src={list[0].icon} alt="logo" />
            <p>{list[0].text}</p>
          </div>
          <div className={styles.nav}>
            {list.slice(1).map((item, index) => {
              return (
                <div className={styles['list-item']} key={index}>
                  <div className={styles.title}>{item.title}</div>
                  {item.items && (
                    <ul>
                      {item.items.map((listItem, listIndex) => (
                        <li key={listIndex}>
                          <a href="#">{listItem}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.icons && (
                    <div className={styles.icons}>
                      {item.icons.map((icon, iconIndex) => (
                        <a href="#" key={iconIndex}>
                          <img src={icon} alt={`icon-${iconIndex}`} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
