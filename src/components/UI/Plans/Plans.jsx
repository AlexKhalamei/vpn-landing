import { useState } from 'react';
import styles from './Plans.module.scss';

const plans = [
  {
    plan: 'Premium Plan',
    interval: '3 Years',
    price: '$2.99',
    year_price: '$107.55',
    year_old_price: '$537.30',
    interval_build: 'Build every 3 years',
    list: [
      'Unlimited bandwitch',
      'Encrypted connection',
      'No traffic logs',
      'Works on all devices',
      'Instant setup',
      'Torrent allowed',
    ],
    btn: 'Subscribe',
  },
  {
    plan: 'Popular Plan',
    interval: '1 Years',
    price: '$7.59',
    year_price: '$92.26',
    year_old_price: '$170.88',
    interval_build: 'Build every year',
    list: [
      'Unlimited bandwitch',
      'Encrypted connection',
      'No traffic logs',
      'Works on all devices',
      'Instant setup',
      'Torrent allowed',
    ],
    btn: 'Subscribe',
  },
  {
    plan: 'Basic Plan',
    interval: 'Monthly',
    price: '$14.99',
    interval_build: 'billed monthly',
    list: [
      'Unlimited bandwitch',
      'Encrypted connection',
      'No traffic logs',
      'Works on all devices',
      'Instant setup',
      'Torrent allowed',
    ],
    btn: 'Subscribe',
  },
];

const Plans = () => {
  const [activeCard, setActiveCard] = useState(1);
  const activeCardHandler = (index) => {
    setActiveCard(index);
  };
  return (
    <section className={styles.plans}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Save big with our annual plans</h2>
          <p className={styles.subtitle}>
            Sign up and save a ton! No logs. No hidden fees.
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.cards}>
            {plans.map((item, index) => {
              return (
                <div
                  className={`${styles.card} ${
                    index === activeCard ? styles.active : ''
                  }`}
                  key={index}
                  onClick={() => activeCardHandler(index)}
                >
                  <div className={styles.plan}>{item.plan}</div>
                  <div className={styles.pricing}>
                    <div className={styles.interval}>{item.interval}</div>
                    <div className={styles.price}>
                      {item.price} / <span>month</span>
                    </div>
                    <div className={styles['year']}>
                      <div className={styles['year-pricing']}>
                        <div className={styles['year-price']}>
                          {item.year_price}
                        </div>
                        <div className={styles['year-old-price']}>
                          {item.year_old_price}
                        </div>
                      </div>
                      <div className={styles.build}>{item.interval_build}</div>
                    </div>
                  </div>
                  <ul className={styles.list}>
                    {plans[index].list.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                  <a href="#" className={styles.btn}>
                    {item.btn}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
