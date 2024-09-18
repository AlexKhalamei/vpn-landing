import Card from '../Card/Card';
import styles from './Cards.module.scss';

const Cards = () => {
  return (
    <section className={`${styles.cards}`}>
      <div className={`${styles.wrapper} container`}>
        <Card />
      </div>
    </section>
  );
};

export default Cards;
