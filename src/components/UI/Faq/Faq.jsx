import { useState } from 'react';
import styles from './Faq.module.scss';

const items = [
  {
    title: 'Which plan is right for me?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint. Quod beatae doloremque quaerat, delectus qui totam fuga, accusamus vero blanditiis culpa magni vitae doloribus. Harum vero culpa voluptatem voluptate eveniet id modi quidem minus molestiae iste at, ipsa, doloremque blanditiis? Expedita amet est perspiciatis quae aliquid maxime similique in.',
  },
  {
    title: 'Which plan is right for me?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint. Quod beatae doloremque quaerat, delectus qui totam fuga, accusamus vero blanditiis culpa magni vitae doloribus. Harum vero culpa voluptatem voluptate eveniet id modi quidem minus molestiae iste at, ipsa, doloremque blanditiis? Expedita amet est perspiciatis quae aliquid maxime similique in.',
  },
  {
    title: 'Which plan is right for me?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint. Quod beatae doloremque quaerat, delectus qui totam fuga, accusamus vero blanditiis culpa magni vitae doloribus. Harum vero culpa voluptatem voluptate eveniet id modi quidem minus molestiae iste at, ipsa, doloremque blanditiis? Expedita amet est perspiciatis quae aliquid maxime similique in.',
  },
  {
    title: 'Which plan is right for me?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint. Quod beatae doloremque quaerat, delectus qui totam fuga, accusamus vero blanditiis culpa magni vitae doloribus. Harum vero culpa voluptatem voluptate eveniet id modi quidem minus molestiae iste at, ipsa, doloremque blanditiis? Expedita amet est perspiciatis quae aliquid maxime similique in.',
  },
  {
    title: 'Which plan is right for me?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint. Quod beatae doloremque quaerat, delectus qui totam fuga, accusamus vero blanditiis culpa magni vitae doloribus. Harum vero culpa voluptatem voluptate eveniet id modi quidem minus molestiae iste at, ipsa, doloremque blanditiis? Expedita amet est perspiciatis quae aliquid maxime similique in.',
  },
];

const Faq = () => {
  const [faqIndex, setFaqIndex] = useState(null);
  const faqIndexHandler = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };
  return (
    <section className={styles.faq}>
      <div className={`${styles.wrapper} container`}>
        <h2>Questions users are asking</h2>
        <div className={styles.items}>
          {items.map((item, index) => {
            return (
              <div
                className={`${styles.item} ${
                  index === faqIndex ? styles.active : ''
                }`}
                key={index}
                onClick={() => faqIndexHandler(index)}
              >
                <div className={styles.title}>
                  <span>{item.title}</span>
                </div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
