import styles from './Comments.module.scss';
import './Swiper.scss';

// imgs

import commentIcon from '@/assets/comment-icon.svg';
import commentsImg from '@/assets/comments.svg';

// swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const comments = [
  {
    text: 'Since we trust that you will fall in love with vping, we offer our users the option to try it for 30 days. If you don’t enjoy the experience, we will give you a 100% refund. It is a long established fact that a reader will be distracted.',
    icon: commentIcon,
    name: 'Salina Gomez',
    date: 'Aug 24, 2024',
  },
  {
    text: 'Since we trust that you will fall in love with vping, we offer our users the option to try it for 30 days. If you don’t enjoy the experience, we will give you a 100% refund. It is a long established fact that a reader will be distracted.',
    icon: commentIcon,
    name: 'Alexa Stark',
    date: 'Aug 30, 2024',
  },
  {
    text: 'Since we trust that you will fall in love with vping, we offer our users the option to try it for 30 days. If you don’t enjoy the experience, we will give you a 100% refund. It is a long established fact that a reader will be distracted.',
    icon: commentIcon,
    name: 'Diana Fox',
    date: 'Sep 10, 2024',
  },
];

const Comments = () => {
  return (
    <section className={styles.comments}>
      <div className={`${styles.wrapper} container`}>
        <h2>The highest rated VPN</h2>
        <p>Trusted and loved by our users</p>
      </div>
      <div className={styles.slider}>
        <div className={styles.swiperWrapper}>
          <Swiper
            slidesPerView={1}
            spaceBetween={200}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {comments.map((comment, index) => {
              return (
                <SwiperSlide key={index} className={styles.slide}>
                  <div className={styles.comment}>
                    <p>{comment.text}</p>
                    <div className={styles.person}>
                      <div className={styles.icon}>
                        <img src={comment.icon} alt={comment.name} />
                      </div>
                      <div className={styles['person-data']}>
                        <div className={styles.name}>{comment.name}</div>
                        <div className={styles.date}>{comment.date}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.img}>
          <img src={commentsImg} alt="comments" />
        </div>
      </div>
    </section>
  );
};

export default Comments;
