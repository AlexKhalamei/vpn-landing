import styles from './Card.module.scss';

// imgs
import cardIcon1 from '@/assets/card-icon-1.svg';
import cardIcon2 from '@/assets/card-icon-2.svg';
import cardIcon3 from '@/assets/card-icon-3.svg';
import cardIcon4 from '@/assets/card-icon-4.svg';
import card1 from '@/assets/card-1.svg';
import card2 from '@/assets/card-2.svg';
import card3 from '@/assets/card-3.svg';

const cards = [
  {
    title: 'One gateway endless entertainment',
    description:
      'Content at the tip of your fingers! With thousands of servers and millions of IPs, you can access websites and enjoy your favourite movies, TV shows, games, and more; in over 190 countries.',
    img: card1,
    icons: [cardIcon1, cardIcon2, cardIcon3, cardIcon4],
  },
  {
    title: 'Putting power back into your hands',
    description:
      'Instant protection to enhance your online privacy. Browse the internet safety and anonymously.',
    img: card2,
    btn: 'Get Started',
  },
  {
    title: '30 Days money back guarantee',
    description:
      'Since we trust that you will fall in love with vping, we offer our users the option to try it for 30 days. If you don’t enjoy the experience, we will give you a 100% refund.',
    img: card3,
    btn: 'Get Started',
  },
];

const Card = () => {
  return cards.map((card, index) => {
    return (
      <div className={styles.card} key={index}>
        <div className={styles['card__content']}>
          <h2 className={styles.title}>{card.title}</h2>
          <p>{card.description}</p>
          {card.icons && (
            <div className={styles.icons}>
              {card.icons.map((icon, index) => {
                return <img src={icon} alt={`card-${index}`} key={index} />;
              })}
            </div>
          )}
          {card.btn && (
            <a href="#" className={styles.btn}>
              {card.btn}
            </a>
          )}
        </div>
        <div className={styles['card__img']}>
          <img src={card.img} alt={card.title} />
        </div>
      </div>
    );
  });
};

export default Card;
