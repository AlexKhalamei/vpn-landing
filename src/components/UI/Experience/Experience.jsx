import styles from './Experience.module.scss';

// imgs
import expIcon1 from '@/assets/exp-icon-1.svg';
import expIcon2 from '@/assets/exp-icon-2.svg';
import expIcon3 from '@/assets/exp-icon-3.svg';
import expIcon4 from '@/assets/exp-icon-4.svg';

const items = [
  {
    icon: expIcon1,
    title: 'No Limits',
    descriprion: 'Enjoy unlimited data - nothing will stop you!',
  },
  {
    icon: expIcon2,
    title: '100% Safe',
    descriprion: 'All your data is encrypted, keeping you safe!',
  },
  {
    icon: expIcon3,
    title: 'Fastest VPN',
    descriprion: 'HD Streaming with fastest VPN,  no buffering!',
  },
  {
    icon: expIcon4,
    title: 'No-Logs Policy',
    descriprion: 'Maintain your online privacy and anonymity.',
  },
];

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={`${styles.wrapper} container`}>
        <h2>A premium experience</h2>
        <div className={styles.items}>
          {items.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <div className={styles.img}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className={styles.title}>{item.title}</div>
                <p>{item.descriprion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
