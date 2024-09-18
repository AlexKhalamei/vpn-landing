import styles from './Hero.module.scss';
import award from '@/assets/award.svg';

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.wrapper} container`}>
          <div className={styles.content}>
            <h1>Get access to worldwide content</h1>
            <p className={styles.subtitle}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
            <p>
              Start from <span className={styles.price}>$2.99</span> / month
            </p>
            <div className={styles['hero__btn']}>
              <a href="" className={styles.btn}>
                Get Started
              </a>
              <p className={styles.small}>* 30-Days money back gurantee</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.award}>
        <img src={award} alt="award" />
      </section>
    </>
  );
};

export default Hero;
